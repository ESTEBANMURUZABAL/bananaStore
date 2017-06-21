/**
 * Imports
 */
import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';

// Flux
import ServiceDetailsStore from '../../../../stores/Services/ServiceDetailsStore';
import ServicesStore from '../../../../stores/Services/ServicesStore';
import IntlStore from '../../../../stores/Application/IntlStore';

import fetchServiceAndCheckIfFound from '../../../../actions/Services/fetchServiceAndCheckIfFound';
import updateService from '../../../../actions/Admin/updateService';

// Delete
import DeleteHandler from '../../../common/deleteHandler/DeleteHandler';
import deleteService from '../../../../actions/Admin/deleteService';
import Modal from '../../../common/modals/Modal';

// Required components
import Button from '../../../common/buttons/Button';
import Checkbox from '../../../common/forms/Checkbox';
import FormLabel from '../../../common/forms/FormLabel';
import Heading from '../../../common/typography/Heading';
import ImageLibraryManager from '../../../containers/images/ImageLibraryManager';
import InputField from '../../../common/forms/InputField';
import InlineItems from '../../../common/forms/InlineItems';
import NotFound from '../../NotFound/NotFound';
import Select from '../../../common/forms/Select';
import Textarea from '../../../common/forms/Textarea';
import ToggleSwitch from '../../../common/buttons/ToggleSwitch';

// Translation data for this component
import intlData from './AdminServicesEdit.intl';

// Instantiate logger
let debug = require('debug')('bananaCat');

/**
 * Component
 */
class AdminServicesEdit extends React.Component {

    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired,
        getStore: React.PropTypes.func.isRequired
    };

    //*** Required Data ***//

    static fetchData = function (context, params, query, done) {
        context.executeAction(fetchServiceAndCheckIfFound, params.serviceId, done);
    };

    //*** Initial State ***//

    state = {
        service: this.context.getStore(ServiceDetailsStore).getService(),
        error: this.context.getStore(ServiceDetailsStore).getError(),
        loading: this.context.getStore(ServiceDetailsStore).isLoading(),
        fieldErrors: {},
        showDeleteServiceModal: false
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./AdminServicesEdit.scss');
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            service: nextProps._service,
            error: nextProps._error,
            loading: nextProps._loading
        });
    }

    //*** View Controllers ***//

    handleEnabledChange = () => {
        let service = this.state.service;
        service.enabled = !(service.enabled === true);
        this.setState({service: service});
    };

    handleSectionChange = (tag) => {
        let service = this.state.service;
        if (service.tags.indexOf(tag) === -1) {
            service.tags.push(tag);
        } else {
            service.tags.splice(service.tags.indexOf(tag), 1);
        }
        this.setState({service: service});
    };

    handleNameChange = (locale, value) => {
        let service = this.state.service;
        service.name[locale] = value;
        this.setState({service: service});
    };

    handleIntlFieldChange = (field, locale, value) => {
        let service = this.state.service;
        if (!service[field]) {
            service[field] = {};
        }
        service[field][locale] = value;
        this.setState({service: service});
    };

    handleImageLibraryChange = (images) => {
        let service = this.state.service;
        service.images = images;
        this.setState({service: service});
    };

    handlePricingChange = (param, value) => {
        let service = this.state.service;
        service.pricing[param] = value;
        this.setState({service: service});
    };


    handleSaveClick = () => {

        let intlStore = this.context.getStore(IntlStore);

        // Client-side validations
        this.setState({fieldErrors: {}});
        let fieldErrors = {};
        if (!this.state.service.name.en) {
            fieldErrors.nameEN = intlStore.getMessage(intlData, 'fieldRequired');
        }
        if (!this.state.service.name.es) {
            fieldErrors.nameES = intlStore.getMessage(intlData, 'fieldRequired');
        }
        this.setState({fieldErrors: fieldErrors});

        // Client-side validation checked, trigger update request
        if (Object.keys(fieldErrors).length === 0) {
            let service = this.state.service;
            this.context.executeAction(updateService, {
                id: service.id,
                data: {
                    enabled: service.enabled,
                    name: service.name,
                    description: service.description,
                    tags: service.tags,
                    images: service.images,
                    pricing: {
                        currency: service.pricing.currency,
                        arsprice: parseFloat(service.pricing.arsprice),
                        usdprice: parseFloat(service.pricing.usdprice)
                    },
                    metadata: service.metadata
                }
            });
        }
    };

    // Delete service Modal

    handleDeleteServiceModalClick = () => {
        this.setState({showDeleteServiceModal: true});
    };

    handleDeleteCancelClick = () => {
        this.setState({showDeleteServiceModal: false});
    };

    handleDeleteServiceClick = () => {
        this.context.executeAction(deleteService, this.state.service.id);
        this.setState({showDeleteServiceModal: false});
    };

    //*** Template ***//

    render() {

        //
        // Helper methods & variables
        //

        let intlStore = this.context.getStore(IntlStore);
        let routeParams = {locale: this.context.getStore(IntlStore).getCurrentLocale()}; // Base route params

        let fieldError = (field) => {
            return this.state.fieldErrors[field];
        };

        /// Delete Modal
        let deleteServiceModal = () => {
            if (this.state.showDeleteServiceModal) {
                return (
                    <Modal title={intlStore.getMessage(intlData, 'deleteServiceModalTitle')}>
                    <DeleteHandler onCancelClick={this.handleDeleteCancelClick}
                                         onSubmitClick={this.handleDeleteServiceClick} />
                    </Modal>
                );
            }
        };


        //
        // Return
        //
        return (
            <div className="admin-services-edit">
            {deleteServiceModal()}
                <div className="admin-services-edit__header">
                    <div className="admin-services-edit__title">
                        <Heading size="medium">
                            <FormattedMessage
                                message={intlStore.getMessage(intlData, 'title')}
                                locales={intlStore.getCurrentLocale()} />
                        </Heading>
                    </div>
                    {this.state.service ?
                        <div className="admin-services-edit__toolbar">
                            <div className="admin-services-edit__toolbar-item">
                                <Link to="adm-services" params={routeParams}>
                                    <Button type="default" disabled={this.state.loading}>
                                        <FormattedMessage
                                            message={intlStore.getMessage(intlData, 'back')}
                                            locales={intlStore.getCurrentLocale()} />
                                    </Button>
                                </Link>
                            </div>
                            <div className="admin-services-edit__toolbar-item">
                                <Button type="primary" onClick={this.handleSaveClick} disabled={this.state.loading}>
                                    <FormattedMessage
                                        message={intlStore.getMessage(intlData, 'save')}
                                        locales={intlStore.getCurrentLocale()} />
                                </Button>
                            </div>
                            <div className="admin-services-edit__toolbar-item">
                              <Button type="primary" onClick={this.handleDeleteServiceModalClick} disabled={this.state.loading}>
                                  <FormattedMessage
                                      message={intlStore.getMessage(intlData, 'delete')}
                                      locales={intlStore.getCurrentLocale()} />
                              </Button>
                          </div>
                        </div>
                        :
                        null
                    }
                </div>
                {!this.state.service ?
                    <NotFound />
                    :
                    <div className="admin-services-edit__form">
                        <div className="admin-services-edit__left-column">
                            <div className="admin-service-edit__form-item">
                                <ToggleSwitch label={intlStore.getMessage(intlData, 'enabled')}
                                              enabled={this.state.service.enabled === true}
                                              onChange={this.handleEnabledChange} />
                            </div>
                            <div className="admin-service-edit__form-item">
                                <div className="admin-service-edit__checkbox-inline">
                                    <div className="admin-service-edit__checkbox-inline-label">
                                        <FormLabel>
                                            <FormattedMessage
                                                message={intlStore.getMessage(intlData, 'sections')}
                                                locales={intlStore.getCurrentLocale()} />
                                        </FormLabel>
                                    </div>
                                </div>
                            </div>
                            <div className="admin-service-edit__form-item">
                                <InputField label={intlStore.getMessage(intlData, 'name') + ' (EN)'}
                                            onChange={this.handleNameChange.bind(null, 'en')}
                                            value={this.state.service.name.en}
                                            error={fieldError('nameEN')} />
                            </div>
                            <div className="admin-service-edit__form-item">
                                <InputField label={intlStore.getMessage(intlData, 'name') + ' (ES)'}
                                            onChange={this.handleNameChange.bind(null, 'es')}
                                            value={this.state.service.name.es}
                                            error={fieldError('nameES')} />
                            </div>
                            <div className="admin-service-edit__form-item">
                                    <Textarea label={intlStore.getMessage(intlData, 'description') + ' (EN)'}
                                              rows="5"
                                              onChange={this.handleIntlFieldChange.bind(null, 'description', 'en')}
                                              value={this.state.service.description ? this.state.service.description.en : null}
                                              error={fieldError('description.en')} />
                            </div>
                            <div className="admin-service-edit__form-item">
                                    <Textarea label={intlStore.getMessage(intlData, 'description') + ' (ES)'}
                                              rows="5"
                                              onChange={this.handleIntlFieldChange.bind(null, 'description', 'es')}
                                              value={this.state.service.description ? this.state.service.description.es : null}
                                              error={fieldError('description.es')} />
                            </div>
                            <div className="admin-services-edit__form-item">
                                <InlineItems label={<FormattedMessage
                                    message={intlStore.getMessage(intlData, 'pricing')}
                                    locales={intlStore.getCurrentLocale()} />}>
                                    <InputField label={intlStore.getMessage(intlData, 'currency')}
                                                labelSize="small" labelWeight="normal"
                                                value={this.state.service.pricing.currency}
                                                onChange={this.handlePricingChange.bind(null, 'currency')}
                                                error={fieldError('pricing.currency')} />
                                    <InputField label={intlStore.getMessage(intlData, 'usdprice')}
                                                labelSize="small" labelWeight="normal"
                                                value={this.state.service.pricing.usdprice}
                                                onChange={this.handlePricingChange.bind(null, 'usdprice')}
                                                error={fieldError('pricing.usdprice')} />
                                    <InputField label={intlStore.getMessage(intlData, 'arsprice')}
                                                labelSize="small" labelWeight="normal"
                                                value={this.state.service.pricing.arsprice}
                                                onChange={this.handlePricingChange.bind(null, 'arsprice')}
                                                error={fieldError('pricing.arsprice')} />
                                </InlineItems>
                            </div>
                            <div className="admin-service-edit__form-item">
                                <ImageLibraryManager images={this.state.service.images}
                                                     onChange={this.handleImageLibraryChange} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

/**
 * Flux
 */
AdminServicesEdit = connectToStores(AdminServicesEdit, [ServiceDetailsStore, ServicesStore], (context) => {
    return {
        _service: context.getStore(ServiceDetailsStore).getService(),
        _error: context.getStore(ServiceDetailsStore).getError(),
        _loading: context.getStore(ServiceDetailsStore).isLoading()
    };
});

/**
 * Exports
 */
export default AdminServicesEdit;
