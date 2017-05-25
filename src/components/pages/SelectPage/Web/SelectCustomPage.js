import React from 'react';
import {FormattedMessage} from 'react-intl';
// Translation data for this component
import intlData from './SelectPage.intl';// Flux
import IntlStore from '../../../../stores/Application/IntlStore';

export default class SelectCustomPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };
  
  componentDidMount() {
      require('./SelectPage.scss');
  }
  
  render() {
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()}; 

    return (
      <section id="select-page">
          <div className="propusal-title"><FormattedMessage message={intlStore.getMessage(intlData, 'string1')} locales={intlStore.getCurrentLocale()} /> Custom Page Pack<FormattedMessage message={intlStore.getMessage(intlData, 'string2')} locales={intlStore.getCurrentLocale()} /></div>
          <div className="select-page-wrapper">

            <div className="direct-contact-container">
            </div>
                
            <div className="subtitle-text"></div>
            <ul className="contact-list">
                <li className="list-item"><i className="fa"><span className="contact-text"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack4Feature1')} /></span></i></li>
            </ul>
            
            
            <form className="form-horizontal" role="form" method="post" action="https://formspree.io/estebannmuruzabal@gmail.com">

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="text" className="form-control" id="name" placeholder={intlStore.getMessage(intlData, 'name')} name="name"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="numbers" className="form-control" id="phone" placeholder={intlStore.getMessage(intlData, 'phone')} name="phone"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" id="email" placeholder={intlStore.getMessage(intlData, 'email')} name="email"/>
                </div>
              </div>
              <textarea className="form-control" rows="10" placeholder={intlStore.getMessage(intlData, 'propousalMessage')} name="propousalMessage"></textarea>
              <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div className="button">
                  <i className="fa fa-paper-plane"></i><span className="send-text"><FormattedMessage message={intlStore.getMessage(intlData, 'send')} locales={intlStore.getCurrentLocale()} /></span>
                </div>
              </button>
              <input type="hidden" name="_next" value="http://localhost:4000/contact" />
            </form>

          </div>
        </section>
    );
  }
}
