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

           <form className="contact-page__form-horizontal" role="form" method="post" action="https://formspree.io/contacto@bananacat.co">

             <div className="contact-page__form-group">
               <div className="col-sm-12">
                 <input type="text" className="form-control" id="name" placeholder={intlStore.getMessage(intlData, 'name')} name="name" required/>
               </div>
             </div>

             <div className="contact-page__form-group">
               <div className="col-sm-12">
                 <input type="numbers" className="form-control" id="phone" placeholder={intlStore.getMessage(intlData, 'phone')} name="phone"required />
               </div>
             </div>

             <div className="contact-page__form-group">
               <div className="col-sm-12">
                 <input type="email" className="form-control" id="email" placeholder={intlStore.getMessage(intlData, 'email')} name="email"required />
               </div>
             </div>

             <textarea className="form-control" rows="10" placeholder={intlStore.getMessage(intlData, 'message')} name="message" required />

             <button className="btn btn-primary contact-page__send-button" id="submit" type="submit" value="SEND">
               <div className="contact-page__button">
                 <i className="fa fa-paper-plane"></i><span className="contact-page__send-text">SEND</span>
               </div>
             </button>

             <input type="hidden" name="_next" value="http://bananacat.co/es/contact" />
           </form>



             <div className="contact-page__direct-contact-container">

               <ul className="contact-page__contact-list">
                 <li className="contact-page__list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text contact-page__place">Chaco-Argentina</span></i></li>

                 <li className="contact-page__list-item"><i className="fa fa-phone fa-2x"><span className="contact-text contact-page__phone"><a href="tel:9-362-420-1230" title="Give me a call">(3624) 20-1230</a></span></i></li>

                 <li className="contact-page__list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text contact-page__gmail"><a href="mailto:#" title="Send me an email">contacto@bananacat.co</a></span></i></li>

               </ul>

               <hr></hr>
               <ul className="contact-page__social-media-list">
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
