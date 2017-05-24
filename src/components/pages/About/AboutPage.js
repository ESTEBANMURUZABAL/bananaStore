import React from 'react';
import {FormattedMessage} from 'react-intl';
// Translation data for this component
import intlData from './AboutPage.intl';// Flux
import IntlStore from '../../../stores/Application/IntlStore';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };
  
  componentDidMount() {
      require('./AboutPage.scss');
  }
  
  render() {
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()}; 

    return (
      <section id="about-container">
        <div className="about-wrapper">
          <div><FormattedMessage message={intlStore.getMessage(intlData, 'content')} locales={intlStore.getCurrentLocale()} /></div>
        </div>
      </section>
    );
  }
}
