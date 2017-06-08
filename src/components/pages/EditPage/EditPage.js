import React from 'react';
import {FormattedMessage} from 'react-intl';
import intlData from './EditPage.intl';// Flux
import IntlStore from '../../../stores/Application/IntlStore';

export default class EditPage extends React.Component {
  static contextTypes = {
      executeAction: React.PropTypes.func.isRequired,
      getStore: React.PropTypes.func.isRequired
  };

  componentDidMount() {
      require('./EditPage.scss');
  }

  render() {
    let intlStore = this.context.getStore(IntlStore);
    let routeParams = {locale: intlStore.getCurrentLocale()};

    return (
      <div className="edit-page__wrapper">

        <div className="indicator-wrapper">
          <ol className="list-unstyled text-center step-indicator step-indicator-horizontal">
            <li className="success">
              <div className="step">1</div>
              <div className="caption hidden-xs hidden-sm">Select Template</div>
            </li>
            <li className="active info">
              <div className="step">2</div>
              <div className="caption">Style your website</div>
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

        <div className="edit-page__section-heading">
          <div>Edit page</div>
        </div>

        <span className="edit-page__heading-separator"></span>

        <div className="edit-page__section-subheading">
          <div>Intact features eight completely different, clean designed demo websites. This is just a glimpse of what you can achive by using the theme. Check and choose the one that suites your needs</div>
        </div>

      </div>
    );
  }
}
