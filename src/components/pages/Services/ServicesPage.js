/**
 * Imports.
 */
import React from 'react';
import async from 'async';
import connectToStores from 'fluxible-addons-react/connectToStores';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';

// Flux
import IntlStore from '../../../stores/Application/IntlStore';

// Required components
import Websites from './Websites';
import SocialMedia from './SocialMedia';
import MobileApps from './MobileApps';
import ServiceContainer from './ServiceContainer';

// Translation data for this component
import intlData from './Services.intl';

/**
 * Component.
 */
export default class ServicesPage extends React.Component {
  
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired,
        getStore: React.PropTypes.func.isRequired
    };


    handleClick(index) {
      this.setState({ activeIndex: index });
    }
  
    //*** Initial State ***//

    state = {
        activeIndex: 'Websites'
    };

    //*** Component Lifecycle ***//

    componentDidMount() {
        require('./ServicesPage.scss');
        this.handleClick = this.handleClick.bind(this);
    }

    //*** Template ***//

    render() {
      const Components = {
        'Websites': Websites,
        'SocialMedia': SocialMedia,
        'MobileApps': MobileApps
      };
      
      let intlStore = this.context.getStore(IntlStore);
      let routeParams = {locale: intlStore.getCurrentLocale()}; // Base route params
      const Component = Components[this.state.activeIndex];
          
      return (
        <div className="service-wrapper">
          <div className="service-tabs-container">
            <ServiceContainer index="Websites" isActive={this.state.activeIndex==='Websites'} onClick={this.handleClick.bind(this)}>
                <FormattedMessage
                message={intlStore.getMessage(intlData, 'websitesTab')}
                locales={intlStore.getCurrentLocale()} />
            </ServiceContainer>
            <ServiceContainer index="SocialMedia" isActive={this.state.activeIndex==='SocialMedia'} onClick={this.handleClick.bind(this)}>
                <FormattedMessage
                message={intlStore.getMessage(intlData, 'socialTab')}
                locales={intlStore.getCurrentLocale()} />
            </ServiceContainer>
            <ServiceContainer index="MobileApps" isActive={this.state.activeIndex==='MobileApps'} onClick={this.handleClick.bind(this)}>
                <FormattedMessage
                message={intlStore.getMessage(intlData, 'mobileTab')}
                locales={intlStore.getCurrentLocale()} />
            </ServiceContainer>
          </div>
          <div className="service-info-container">
            <Component />
          </div>
        </div>
      );
    }
}




