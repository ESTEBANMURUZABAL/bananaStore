import React from 'react';
import {FormattedMessage} from 'react-intl';
import intlData from './PropousalPage.intl';
import IntlStore from '../../../stores/Application/IntlStore';
import {Link} from 'react-router';

export default class PropousalPage extends React.Component {
  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };

  componentDidMount() {
      require('./PropousalPage.scss');
  }

  render() {
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()};

    const Packs = {
      "webPack1": WebPack1,
      "webPack2": WebPack2,
      "webPack3": WebPack3,
      "webPack4": WebPack4,
      "mobilePack1": MobilePack1,
      "mobilePack2": MobilePack2,
      "mobilePack3": MobilePack3,
      "mobilePack4": MobilePack4,
      "mobileAppsPack1": MobileAppsPack1,
      "mobileAppsPack2": MobileAppsPack2,
      "mobileAppsPack3": MobileAppsPack3,
      "mobileAppsPack4": MobileAppsPack4,
      "socialPack1": SocialPack1,
      "socialPack2": SocialPack2,
      "socialPack3": SocialPack3,
      "socialPack4": SocialPack4,
    };

    const PackFeatures = Packs[this.props.params.packNum];
    const templateId = this.props.params.templateId;

    return (
      <section id="propousalPage">
          <div className="propusal-title"><FormattedMessage message={intlStore.getMessage(intlData, 'string1')} /> {this.props.params.packNum}<FormattedMessage message={intlStore.getMessage(intlData, 'string2')} /></div>
          <div className="propousal-wrapper">

            <div className="direct-propousal-container">
              <PackFeatures />
            </div>

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
                  <i className="fa fa-paper-plane"></i><span className="send-text"><FormattedMessage message={intlStore.getMessage(intlData, 'send')} /></span>
                </div>
              </button>
              <input type="hidden" name="_next" value="http://bananacat.co/es/contact" />
            </form>

          </div>
        </section>
    );
  }
}

function WebPack1() {
  return <div>
      <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
      <ul className="contact-list">
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature1')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature2')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature3')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack1Feature4')} /></span></i></li>
      </ul>
    </div>
}
function WebPack2() {
  return <div>
      <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
      <ul className="contact-list">
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature1')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature2')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature3')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature4')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature5')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack2Feature6')} /></span></i></li>
      </ul>
    </div>
}
function WebPack3() {
  return <div>
    <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature1')} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature2')} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature3')} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature4')} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature5')} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Feature6')} /></span></i></li>
    </ul>
  </div>
}
function WebPack4() {
  return <div>
  <div className="subtitle-text"></div>
    <ul className="contact-list">
        <li className="list-item"><i className="fa"><span className="contact-text"><FormattedMessage message={intlStore.getMessage(intlData, 'webPack4Feature1')} /></span></i></li>
    </ul>
  </div>
}
function SocialPack1() {
  return <div>
    <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.socialPack1Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.socialPack1Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack1Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack1Feature4} /></span></i></li>
    </ul>
  </div>
}
function SocialPack2() {
  return <div>
    <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.socialPack2Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.socialPack2Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack2Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack2Feature4} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack2Feature5} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack2Feature6} /></span></i></li>
    </ul>
  </div>
}
function SocialPack3() {
  return <div>
    <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.socialPack3Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.socialPack3Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack3Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack3Feature4} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack3Feature5} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.socialPack3Feature6} /></span></i></li>
    </ul>
  </div>
}
function SocialPack4() {
  return <div>
  <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
    <ul className="contact-list">
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.socialPack4Feature1} /></span></i></li>
    </ul>
  </div>
}
function MobilePack1() {
  return <div>
    <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobilePack1Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.mobilePack1Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack1Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack1Feature4} /></span></i></li>
    </ul>
  </div>
}
function MobilePack2() {
  return <div>
    <div className="subtitle-text"><FormattedMessage {...messages.subtitle} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobilePack2Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.mobilePack2Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack2Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack2Feature4} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack2Feature5} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack2Feature6} /></span></i></li>
    </ul>
  </div>
}
function MobilePack3() {
  return <div>
    <div className="subtitle-text"><FormattedMessage {...messages.subtitle} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobilePack3Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.mobilePack3Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack3Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack3Feature4} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack3Feature5} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobilePack3Feature6} /></span></i></li>
    </ul>
  </div>
}
function MobilePack4() {
  return <div>
  <div className="subtitle-text"><FormattedMessage {...messages.subtitle} /></div>
    <ul className="contact-list">
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobilePack4Feature1} /></span></i></li>
    </ul>
  </div>
}
function MobileAppsPack1() {
  return <div>
    <div className="subtitle-text"><FormattedMessage {...messages.subtitle} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobileAppsPack1Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.mobileAppsPack1Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack1Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack1Feature4} /></span></i></li>
    </ul>
  </div>
}
function MobileAppsPack2() {
  return <div>
    <div className="subtitle-text"><FormattedMessage {...messages.subtitle} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobileAppsPack2Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.mobileAppsPack2Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack2Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack2Feature4} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack2Feature5} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack2Feature6} /></span></i></li>
    </ul>
  </div>
}
function MobileAppsPack3() {
  return <div>
    <div className="subtitle-text"><FormattedMessage {...messages.subtitle} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobileAppsPack3Feature1} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage {...messages.mobileAppsPack3Feature2} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack3Feature3} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack3Feature4} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack3Feature5} /></span></i></li>
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage {...messages.mobileAppsPack3Feature6} /></span></i></li>
    </ul>
  </div>
}
function MobileAppsPack4() {
  return <div>
  <div className="subtitle-text"><FormattedMessage {...messages.subtitle} /></div>
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage {...messages.mobileAppsPack4Feature1} /></span></i></li>
    </ul>
  </div>
}
