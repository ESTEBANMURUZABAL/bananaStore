import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import IntlStore from '../../../stores/Application/IntlStore';
//import Toggle from 'react-toggle'
import intlData from './Services.intl';

export default class MobileApps extends React.Component {
  state = {
      isMonthly: false
  };

  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };

  componentDidMount() {
      require('./ServicesPage.scss');
      this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleToggleChange() {
    this.setState({ isMonthly: !this.state.isMonthly });
  }

  render() {
    const isMonthly = this.state.isMonthly;
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()}; // Base route params

    return (
      <div>
        <div className="service-page__text-wrapper">
          <div className="service-page__tab-title"><FormattedMessage message={intlStore.getMessage(intlData, 'mobileTitle')} locales={intlStore.getCurrentLocale()} /></div>
          <div className="service-page__tab-content"><FormattedMessage message={intlStore.getMessage(intlData, 'mobileContent')} locales={intlStore.getCurrentLocale()} /></div>
        </div>
        <div className="snip1265">

          <div className="plan">
            <header><i className="ion-ios-navigate-outline"></i>
              <h4 className="plan-title">Landing Page</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice5')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice1')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack1Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack1Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack1Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack1Feature4')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="/services/mobilePack1"><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-world"></i>
              <h4 className="plan-title">Admin</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice6')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice2')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack2Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack2Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack2Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack2Feature4')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack2Feature5')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack2Feature6')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="/services/mobilePack2"><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-people"></i>
              <h4 className="plan-title">Online Store</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice7')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice3')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack3Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack3Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack3Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack3Feature4')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack3Feature5')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack3Feature6')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="/services/mobilePack3"><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-speedometer"></i>
              <h4 className="plan-title">Custom Mobile</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice8')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePrice4')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><li><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack4Feature1')} locales={intlStore.getCurrentLocale()} /></li></li>
            </ul>
            <div className="plan-select"><Link to="/services/mobilePack4"><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></Link></div>
          </div>

        </div>
      </div>
    );
  }
}
