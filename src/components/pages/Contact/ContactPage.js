import React from 'react';
import {FormattedMessage} from 'react-intl';
// Translation data for this component
import intlData from './ContactPage.intl';// Flux
import IntlStore from '../../../stores/Application/IntlStore';

export default class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };

  componentDidMount() {
      require('./ContactPage.scss');
  }

  render() {
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()};

    return (
      <section id="contact-page__contact">
         <h1 className="contact-page__section-header"><FormattedMessage message={intlStore.getMessage(intlData, 'title')} locales={intlStore.getCurrentLocale()} /></h1>
         <div className="contact-page__contact-wrapper">

           <form className="form-horizontal" role="form" method="post" action="https://formspree.io/contacto@bananacat.co">

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

             <textarea className="form-control" rows="10" placeholder={intlStore.getMessage(intlData, 'message')} name="message"></textarea>

             <button className="btn btn-primary contact-page__send-button" id="submit" type="submit" value="SEND">
               <div className="contact-page__button">
                 <i className="fa fa-paper-plane"></i><span className="contact-page__send-text">SEND</span>
               </div>
             </button>

             <input type="hidden" name="_next" value="http://bananacat.co/es/contact" />
           </form>



             <div className="direct-contact-container">

               <ul className="contact-list">
                 <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Chaco-Argentina</span></i></li>

                 <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:9-362-420-1230" title="Give me a call">(3624) 20-1230</a></span></i></li>

                 <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">contacto@bananacat.co</a></span></i></li>

               </ul>

               <hr></hr>
               <ul className="social-media-list">
                 <li><a href="#" target="_blank" className="contact-icon">
                   <i className="fa fa-github-alt" aria-hidden="true"></i></a>
                 </li>
                 <li><a href="#" target="_blank" className="contact-icon">
                   <i className="fa fa-twitter" aria-hidden="true"></i></a>
                 </li>
                 <li><a href="#" target="_blank" className="contact-icon">
                   <i className="fa fa-instagram" aria-hidden="true"></i></a>
                 </li>
                 <li><a href="#" target="_blank" className="contact-icon">
                   <i className="fa fa-facebook" aria-hidden="true"></i></a>
                 </li>
               </ul>
               <hr></hr>

               <div className="copyright">&copy; 2017 ALL RIGHTS RESERVED</div>

             </div>
         </div>
       </section>
    );
  }
}
