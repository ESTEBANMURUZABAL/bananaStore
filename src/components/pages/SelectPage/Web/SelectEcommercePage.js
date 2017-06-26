import React from 'react';
import {FormattedMessage} from 'react-intl';
import intlData from './SelectPage.intl';// Flux
import IntlStore from '../../../../stores/Application/IntlStore';
import {Link} from 'react-router';

export default class SelectEcommercePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    let linkParamsTemplate1 = Object.assign({packNum: 'webPack3',templateId: 'template-1'}, routeParams);
    let linkParamsTemplate2 = Object.assign({packNum: 'webPack3',templateId: 'template-2'}, routeParams);
    let linkParamsTemplate3 = Object.assign({packNum: 'webPack3',templateId: 'template-3'}, routeParams);
    let linkParamsTemplate4 = Object.assign({packNum: 'webPack3',templateId: 'template-4'}, routeParams);
    let linkParamsTemplate5 = Object.assign({packNum: 'webPack3',templateId: 'template-5'}, routeParams);
    let linkParamsTemplate6 = Object.assign({packNum: 'webPack3',templateId: 'template-6'}, routeParams);
    let linkParamsTemplate7 = Object.assign({packNum: 'webPack3',templateId: 'template-7'}, routeParams);
    let linkParamsTemplate8 = Object.assign({packNum: 'webPack3',templateId: 'template-8'}, routeParams);
    let linkParamsTemplate9 = Object.assign({packNum: 'webPack3',templateId: 'template-9'}, routeParams);
    let linkParamsTemplate10 = Object.assign({packNum: 'webPack3',templateId: 'template-10'}, routeParams);
    let linkParamsTemplate11 = Object.assign({packNum: 'webPack3',templateId: 'template-11'}, routeParams);
    let linkParamsTemplate12 = Object.assign({packNum: 'webPack3',templateId: 'template-12'}, routeParams);
    let linkParamsTemplate13 = Object.assign({packNum: 'webPack3',templateId: 'template-13'}, routeParams);
    let linkParamsTemplate14 = Object.assign({packNum: 'webPack3',templateId: 'template-14'}, routeParams);
    let linkParamsTemplate15 = Object.assign({packNum: 'webPack3',templateId: 'template-15'}, routeParams);
    let linkParamsTemplate16 = Object.assign({packNum: 'webPack3',templateId: 'template-16'}, routeParams);
    let linkParamsTemplate17 = Object.assign({packNum: 'webPack3',templateId: 'template-17'}, routeParams);
    let linkParamsTemplate18 = Object.assign({packNum: 'webPack3',templateId: 'template-18'}, routeParams);


    return (
      <div className="select-page__wrapper">

        <div className="select-page__section-heading">
          <div><FormattedMessage message={intlStore.getMessage(intlData, 'webPack3Name')} locales={intlStore.getCurrentLocale()} /></div>
        </div>

        <span className="select-page__heading-separator"></span>

        <div className="select-page__section-subheading">
          <div>Intact features eight completely different, clean designed demo websites. This is just a glimpse of what you can achive by using the theme. Check and choose the one that suites your needs</div>
        </div>

        <div className="case-study-gallery">
          <div className="case-study image-template6">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/WpdJmW/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate6}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template7">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/zzKYjj/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate7}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template8">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/xqpjoq/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate8}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template15">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/PpEppR/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate15}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template16">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/zZpjQK/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate16}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template17">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="http://clubaestudiantes.com.ar">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate17}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template18">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://nicistore.com/en">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate18}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template1">
            <div className="case-study__overlay">
            	<a className="case-study__preview" target="_blank" href="http://konsumer.js.org/gatsby-starter-drunkenblog/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate1}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template2">
            <div className="case-study__overlay">
             <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/mWpLYK/">Preview template</a>
             <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate2}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template3">
            <div className="case-study__overlay">
               <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/VpyxRr/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate3}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template4">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="http://gatsbyjs.github.io/gatsby-starter-documentation/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate4}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template5">
            <div className="case-study__overlay">
             <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/wJpjZN/">Preview template</a>
             <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate5}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template9">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/WpdJWB/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate9}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template10">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/Wpdyeq/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate10}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template11">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ettrics/full/WRbGRN/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate11}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template12">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://jaxx2104.github.io/gatsby-starter-bootstrap/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate12}>Select template</Link>
            </div>
          </div>
          <div className="case-study image-template13">
            <div className="case-study__overlay">
              <a className="case-study__preview" target="_blank" href="https://codepen.io/ESTEBANMURUZABAL/full/xqpjNq/">Preview template</a>
              <Link className="case-study__choose" to="propousal-page" params={linkParamsTemplate13}>Select template</Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
