import React from 'react';
import {FormattedMessage} from 'react-intl';
import intlData from './SelectPage.intl';// Flux
import IntlStore from '../../../../stores/Application/IntlStore';
import {Link} from 'react-router';

export default class SelectCustomMobile extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    let linkParamsTemplate1 = Object.assign({packNum: 'mobilePack4',templateId: 'template-1'}, routeParams);
    let linkParamsTemplate2 = Object.assign({packNum: 'mobilePack4',templateId: 'template-2'}, routeParams);
    let linkParamsTemplate3 = Object.assign({packNum: 'mobilePack4',templateId: 'template-3'}, routeParams);
    let linkParamsTemplate4 = Object.assign({packNum: 'mobilePack4',templateId: 'template-4'}, routeParams);
    let linkParamsTemplate5 = Object.assign({packNum: 'mobilePack4',templateId: 'template-5'}, routeParams);
    let linkParamsTemplate6 = Object.assign({packNum: 'mobilePack4',templateId: 'template-6'}, routeParams);

    return (
      <div className="select-page__wrapper">

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

        <div className="select-page__section-heading">
          <div><FormattedMessage message={intlStore.getMessage(intlData, 'mobilePack2Name')} locales={intlStore.getCurrentLocale()} /></div>
        </div>

        <span className="select-page__heading-separator"></span>

        <div className="select-page__section-subheading">
          <div>Intact features eight completely different, clean designed demo websites. This is just a glimpse of what you can achive by using the theme. Check and choose the one that suites your needs</div>
        </div>

        <div className="case-study-gallery">
          <div className="case-study study1">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
            	<Link className="case-study__preview" to="edit-page" params={routeParams}>Preview template</Link>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate1}>Select template</Link>
            </div>
          </div>

          <div className="case-study study2">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
             <Link className="case-study__preview" to="edit-page" params={routeParams}>Preview template</Link>
             <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate2}>Select template</Link>
            </div>
          </div>

          <div className="case-study study3">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
              <Link className="case-study__preview" to="edit-page" params={routeParams}>Preview template</Link>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate3}>Select template</Link>
            </div>
          </div>

          <div className="case-study study4">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
              <Link className="case-study__preview" to="edit-page" params={routeParams}>Preview template</Link>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate4}>Select template</Link>
            </div>
          </div>

          <div className="case-study study5">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
             <Link className="case-study__preview" to="edit-page" params={routeParams}>Preview template</Link>
             <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate5}>Select template</Link>
            </div>
          </div>

          <div className="case-study study6">
          	<figure>
          		<img className="case-study__img" src="http://static.squarespace.com/static/51b79838e4b0b8b55c75cf91/t/51c4b688e4b03003ea9f1a63/1371846281755/Hexxis+Logo+White.png" alt="" />
          	</figure>
            <div className="case-study__overlay">
              <Link className="case-study__preview" to="edit-page" params={routeParams}>Preview template</Link>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate6}>Select template</Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
