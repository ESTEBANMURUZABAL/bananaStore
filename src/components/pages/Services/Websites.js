import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import IntlStore from '../../../stores/Application/IntlStore';
import connectToStores from 'fluxible-addons-react/connectToStores';
//import Toggle from 'react-toggle'
import intlData from './Services.intl';

export default class Websites extends React.Component {

  state = {
      isMonthly: false
  };

  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };

  handleToggleChange() {
    this.setState({ isMonthly: !this.state.isMonthly });
  }

  componentDidMount() {
      require('./ServicesPage.scss');
      this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  render() {
    const isMonthly = this.state.isMonthly;
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()}; // Base route params

    return (
      <div>
        <div className="service-page__tab-title"><FormattedMessage message={intlStore.getMessage(intlData, 'webTitle')} /></div>
        <div className="service-page__tab-content"><FormattedMessage message={intlStore.getMessage(intlData, 'webContent')} /></div>

        <div className="snip1265">

          <div className="plan">
            <header><i className="ion-ios-navigate-outline"></i>
              <h4 className="plan-title">Landing Page</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice5')} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice1')} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature4')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="select-landing-page" params={routeParams}><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-world"></i>
              <h4 className="plan-title">Admin</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice6')} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice2')} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature4')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature5')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature6')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="select-admin-page" params={routeParams}><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-people"></i>
              <h4 className="plan-title">Online Store</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice7')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice3')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature4')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature5')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature6')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="select-ecommerce-page" params={routeParams}><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-speedometer"></i>
              <h4 className="plan-title">Custom Web</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice8')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'webPrice4')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><li><FormattedMessage message={intlStore.getMessage(intlData, 'webPack4Feature1')} locales={intlStore.getCurrentLocale()} /></li></li>
            </ul>
            <div className="plan-select"><Link to="select-custom-page" params={routeParams}><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} /></Link></div>
          </div>

        </div>
      </div>
    );
  }
}
