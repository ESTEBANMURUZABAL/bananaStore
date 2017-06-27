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

    const packName = this.props.params.packNum;
    const templateId = this.props.params.templateId;

    let content = null;
    if (this.props.params.packNum ===  'webPack1' || this.props.params.packNum ===  'mobilePack1') {
      content = <div>
          <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature1')} /></span></i></li>
          <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature2')} /></span></i></li>
          <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature3')} /></span></i></li>
          <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature4')} /></span></i></li>
          </div>;
    } else if (this.props.params.packNum ===  'webPack4' || this.props.params.packNum ===  'mobilePack4') {
      content =   <div>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature1')} /></span></i></li>
        </div>;
    } else {
      content =   <div>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text place"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature1')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text phone"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature2')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature3')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature4')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature5')} /></span></i></li>
        <li className="list-item"><i className="fa fa-check-square fa-2x"><span className="contact-text gmail"><FormattedMessage message={intlStore.getMessage(intlData, this.props.params.packNum+'Feature6')} /></span></i></li>
        </div>;
    }

    return (
      <section id="propousalPage">
          <div className="propusal-title"><FormattedMessage message={intlStore.getMessage(intlData, 'string1')} /> {this.props.params.packNum}<FormattedMessage message={intlStore.getMessage(intlData, 'string2')} /></div>
          <div className="propousal-wrapper">

            <div className="direct-propousal-container">
              <div>
                {this.props.params.packNum ===  'webPack4' || this.props.params.packNum ===  'mobilePack4' ?
                    null
                    :
                    <div className="subtitle-text"><FormattedMessage message={intlStore.getMessage(intlData, 'subtitle')} /></div>
                }
                <ul className="contact-list">
                  {content}
                </ul>
              </div>
            </div>

            <form className="propousal-form-horizontal" role="form" method="post" action="https://formspree.io/ventas@bananacat.co">

              <div className="propousal-form-group">
                <div className="col-sm-12">
                  <input type="text" className="propousal-form-control" id="name" placeholder={intlStore.getMessage(intlData, 'name')} name="name" required/>
                </div>
              </div>
              <div className="propousal-form-group">
                <div className="col-sm-12">
                  <input type="numbers" className="propousal-form-control" id="phone" placeholder={intlStore.getMessage(intlData, 'phone')} name="phone" required/>
                </div>
              </div>
              <div className="propousal-form-group">
                <div className="col-sm-12">
                  <input type="email" className="propousal-form-control" id="email" placeholder={intlStore.getMessage(intlData, 'email')} name="email" required/>
                </div>
              </div>
              <div className="propousal-form-group">
                <div className="col-sm-12">
                  <input type="text" className="propousal-form-control" id="pack" placeholder={packName + ' ' + templateId} name="pack" disabled/>
                </div>
              </div>
              <textarea className="propousal-form-control" rows="10" placeholder={intlStore.getMessage(intlData, 'propousalMessage')} name="propousalMessage" required></textarea>
              <button className="btn btn-primary propousal-send-button" id="submit" type="submit" value="SEND">
                <div className="propousal-button">
                  <i className="fa fa-paper-plane"></i><span className="propousal-send-text"><FormattedMessage message={intlStore.getMessage(intlData, 'send')} /></span>
                </div>
              </button>
              <input type="hidden" name="_next" value="http://bananacat.co/es/contact" />
            </form>

          </div>
        </section>
    );
  }
}
