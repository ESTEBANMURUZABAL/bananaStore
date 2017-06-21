/**
 * Imports
 */
import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';

// Flux
import ServicesAddStore from '../../../../stores/Services/ServicesAddStore';
import ServicesListStore from '../../../../stores/Services/ServicesListStore';
import ServicesStore from '../../../../stores/Services/ServicesStore';
import IntlStore from '../../../../stores/Application/IntlStore';

import addService from '../../../../actions/Admin/addService';
import fetchServices from '../../../../actions/Services/fetchServices';

// Required components
import Button from '../../../common/buttons/Button';
import Heading from '../../../common/typography/Heading';
import Label from '../../../common/indicators/Label';
import Modal from '../../../common/modals/Modal';
import StatusIndicator from '../../../common/indicators/StatusIndicator';
import Table from '../../../common/tables/Table';
import Text from '../../../common/typography/Text';

import AdminServicesAddForm from './AdminServicesAddForm';

// Translation data for this component
import intlData from './AdminServices.intl';

/**
 * Component
 */
class AdminServices extends React.Component {

    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired,
        getStore: React.PropTypes.func.isRequired,
        router: React.PropTypes.func.isRequired
    };

    //*** Required Data ***//

    static fetchData = function (context, params, query, done) {
        context.executeAction(fetchServices, {}, done);
    };

    //*** Initial State ***//

    state = {
        addService: this.context.getStore(ServicesAddStore).getState(),
        services: this.context.getStore(ServicesListStore).getServices(),
        showNewServiceModal: false
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./AdminServices.scss');
    }

    componentWillReceiveProps(nextProps) {

        // If new Service was being added and was successful, redirect to
        // Service edit page
        if (this.state.addService.loading === true
            && nextProps._addService.loading === false && !nextProps._addService.error) {
            let params = {
                locale: this.context.getStore(IntlStore).getCurrentLocale(),
                serviceId: nextProps._addService.service.id
            };
            this.context.router.transitionTo('adm-service-edit', params);
        }

        // Update state
        this.setState({
            addService: nextProps._addService,
            services: nextProps._services
        });
    }

    //*** View Controllers ***//

    handleNewServiceClick = () => {
        this.setState({showNewServiceModal: true});
    };

    handleNewServiceCloseClick = () => {
        this.setState({showNewServiceModal: false});
    };

    handleNewServiceSubmitClick = (data) => {
        this.context.executeAction(addService, data);
    };

    //*** Template ***//

    render() {

        //
        // Helper methods & variables
        //

        let intlStore = this.context.getStore(IntlStore);
        let routeParams = {locale: this.context.getStore(IntlStore).getCurrentLocale()}; // Base route params

        let headings = [
            <FormattedMessage
                message={intlStore.getMessage(intlData, 'nameHeading')}
                locales={intlStore.getCurrentLocale()} />,
            <FormattedMessage
                message={intlStore.getMessage(intlData, 'enabledHeading')}
                locales={intlStore.getCurrentLocale()} />
        ];

        let rows = this.state.services.map((service) => {
            return {
                data: [
                    <span className="admin-services__link">
                        <Link to="adm-service-edit" params={Object.assign({serviceId: service.id}, routeParams)}>
                            <FormattedMessage
                                message={intlStore.getMessage(service.name)}
                                locales={intlStore.getCurrentLocale()} />
                        </Link>
                    </span>,
                    <StatusIndicator status={(service.enabled === true) ? 'success' : 'default'} />
                ]
            };
        });

        let newServiceModal = () => {
            if (this.state.showNewServiceModal) {
                return (
                    <Modal title={intlStore.getMessage(intlData, 'newModalTitle')}
                           onCloseClick={this.handleNewServiceCloseClick}>
                        <AdminServicesAddForm
                            loading={this.state.addService.loading}
                            onCancelClick={this.handleNewServiceCloseClick}
                            onSubmitClick={this.handleNewServiceSubmitClick} />
                    </Modal>
                );
            }
        };

        //
        // Return
        //
        return (
            <div className="admin-services">
                {newServiceModal()}

                <div className="admin-services__header">
                    <div className="admin-services__title">
                        <Heading size="medium">
                            <FormattedMessage
                                message={intlStore.getMessage(intlData, 'title')}
                                locales={intlStore.getCurrentLocale()} />
                        </Heading>
                    </div>
                    <div className="admin-services__toolbar">
                        <div className="admin-services__add-button">
                            <Button type="primary" onClick={this.handleNewServiceClick}>
                                <FormattedMessage
                                    message={intlStore.getMessage(intlData, 'new')}
                                    locales={intlStore.getCurrentLocale()} />
                            </Button>
                        </div>
                    </div>
                </div>
                {!this.state.loading && this.state.services.length === 0 ?
                    <div className="admin-services__no-results">
                        <Text size="small">
                            <FormattedMessage message={intlStore.getMessage(intlData, 'noResults')}
                                              locales={intlStore.getCurrentLocale()} />
                        </Text>
                    </div>
                    :
                    <div className="admin-services__list">
                        <Table headings={headings} rows={rows} />
                    </div>
                }
            </div>
        );
    }
}

/**
 * Flux
 */
AdminServices = connectToStores(AdminServices, [ServicesAddStore, ServicesListStore], (context) => {
    return {
        _addService: context.getStore(ServicesAddStore).getState(),
        _services: context.getStore(ServicesListStore).getServices()
    };
});

/**
 * Exports
 */
export default AdminServices;
