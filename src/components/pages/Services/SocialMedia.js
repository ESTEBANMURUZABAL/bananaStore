import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import IntlStore from '../../../stores/Application/IntlStore';
//import Toggle from 'react-toggle'
import intlData from './Services.intl';

export default class SocialMedia extends React.Component {
  
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
        <div className="tab-title"><FormattedMessage message={intlStore.getMessage(intlData, 'socialTitle')} locales={intlStore.getCurrentLocale()} /></div>
        <p className="tab-content"><FormattedMessage message={intlStore.getMessage(intlData, 'socialContent')} locales={intlStore.getCurrentLocale()} /></p>

        <div className="snip1265">

          <div className="plan">
            <header><i className="ion-ios-navigate-outline"></i>
              <h4 className="plan-title">Landing Page</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice5')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice1')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack1Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack1Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack1Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack1Feature4')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="/services/socialPack1" params={routeParams}><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-world"></i>
              <h4 className="plan-title">Admin</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice6')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice2')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack2Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack2Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack2Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack2Feature4')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack2Feature5')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack2Feature6')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="/services/socialPack2"><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-people"></i>
              <h4 className="plan-title">Online Store</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice7')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice3')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack3Feature1')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack3Feature2')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack3Feature3')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack3Feature4')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack3Feature5')} locales={intlStore.getCurrentLocale()} /></li>
              <li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack3Feature6')} locales={intlStore.getCurrentLocale()} /></li>
            </ul>
            <div className="plan-select"><Link to="/services/socialPack3"><li><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></li></Link></div>
          </div>

          <div className="plan">
            <header><i className="ion-ios-speedometer"></i>
              <h4 className="plan-title">Custom Social</h4>
              {isMonthly ? (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice8')} locales={intlStore.getCurrentLocale()} />/<FormattedMessage message={intlStore.getMessage(intlData, 'month')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              ) : (
                <div className="plan-cost"><span className="plan-price"><FormattedMessage message={intlStore.getMessage(intlData, 'socialPrice4')} locales={intlStore.getCurrentLocale()} /></span><span className="plan-type"></span></div>
              )}
            </header>
            <ul className="plan-features">
              <li><li><FormattedMessage message={intlStore.getMessage(intlData, 'socialPack4Feature1')} locales={intlStore.getCurrentLocale()} /></li></li>
            </ul>
            <div className="plan-select"><Link to="/services/socialPack4"><li><FormattedMessage message={intlStore.getMessage(intlData, 'selectPlan')} locales={intlStore.getCurrentLocale()} /></li></Link></div>
          </div>

        </div>
      </div>
    );
  }
  }

