import React from 'react';
import {FormattedMessage} from 'react-intl';
import intlData from './SelectPage.intl';// Flux
import IntlStore from '../../../../stores/Application/IntlStore';
import {Link} from 'react-router';

export default class SelectCustomPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };

  componentDidMount() {
      require('./SelectPageLanding.scss');
  }

  render() {
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()};

    return (
      <div className="select-page-wrapper">

        <div className="indicator-wrapper">
          <ol className="list-unstyled text-center step-indicator step-indicator-horizontal">
          <li className="active info">
            <div className="step">1</div>
            <div className="caption">Select Template</div>
          </li>
          <li className="">
            <div className="step">2</div>
            <div className="caption hidden-xs hidden-sm">Style your website</div>
          </li>
            <li className="">
              <div className="step">3</div>
              <div className="caption hidden-xs hidden-sm">Fullfil content/Images & logo</div>
            </li>
            <li className="">
              <div className="step">4</div>
              <div className="caption hidden-xs hidden-sm">Confirm and Payment</div>
            </li>
          </ol>
        </div>

        <div className="section-heading">
          <div><FormattedMessage message={intlStore.getMessage(intlData, 'webPack4Name')} locales={intlStore.getCurrentLocale()} /></div>
        </div>

        <span className="heading-separator"></span>

        <div className="section-subheading">
          <div>Intact features eight completely different, clean designed demo websites. This is just a glimpse of what you can achive by using the theme. Check and choose the one that suites your needs</div>
        </div>

        <div className="case-study-gallery">
          <div className="case-study study1">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
            	<h2 className="case-study__title">Select Demo</h2>
              <Link className="case-study__link" to="edit-page" params={routeParams}>View Case Study</Link>
            </div>
          </div>

          <div className="case-study study2">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
            	<h2 className="case-study__title">Developing Hexxis</h2>
              <Link className="case-study__link" to="edit-page" params={routeParams}>View Case Study</Link>
            </div>
          </div>

          <div className="case-study study3">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
            	<h2 className="case-study__title">Developing Hexxis</h2>
              <Link className="case-study__link" to="edit-page" params={routeParams}>View Case Study</Link>
            </div>
          </div>

          <div className="case-study study4">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
            	<h2 className="case-study__title">Developing Hexxis</h2>
              <Link className="case-study__link" to="edit-page" params={routeParams}>View Case Study</Link>
            </div>
          </div>

          <div className="case-study study5">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
            	<h2 className="case-study__title">Developing Hexxis</h2>
              <Link className="case-study__link" to="edit-page" params={routeParams}>View Case Study</Link>
            </div>
          </div>

          <div className="case-study study6">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
            	<h2 className="case-study__title">Developing Hexxis</h2>
              <Link className="case-study__link" to="edit-page" params={routeParams}>View Case Study</Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

// <div className="direct-contact-container">
// <div>
//     <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
//     <ul className="contact-list">
//       <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature1')} /></span></i></li>
//       <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature2')} /></span></i></li>
//       <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature3')} /></span></i></li>
//       <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature4')} /></span></i></li>
//     </ul>
//   </div>
// </div>
//
// <form className="form-horizontal" role="form" method="post" action="https://formspree.io/estebannmuruzabal@gmail.com">
//
//   <div className="form-group">
//     <div className="col-sm-12">
//       <input type="text" className="form-control" id="name" placeholder={intlStore.getMessage(intlData, 'name')} name="name"/>
//     </div>
//   </div>
//   <div className="form-group">
//     <div className="col-sm-12">
//       <input type="numbers" className="form-control" id="phone" placeholder={intlStore.getMessage(intlData, 'phone')} name="phone"/>
//     </div>
//   </div>
//   <div className="form-group">
//     <div className="col-sm-12">
//       <input type="email" className="form-control" id="email" placeholder={intlStore.getMessage(intlData, 'email')} name="email"/>
//     </div>
//   </div>
//   <textarea className="form-control" rows="10" placeholder={intlStore.getMessage(intlData, 'propousalMessage')} name="propousalMessage"></textarea>
//   <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
//     <div className="button">
//       <i className="fa fa-paper-plane"></i><span className="send-text"><FormattedMessage message={intlStore.getMessage(intlData, 'send')} locales={intlStore.getCurrentLocale()} /></span>
//     </div>
//   </button>
//   <input type="hidden" name="_next" value="http://localhost:4000/contact" />
// </form>
