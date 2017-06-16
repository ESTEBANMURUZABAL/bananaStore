/**
 * Imports.
 */
import React from 'react';
import async from 'async';
import connectToStores from 'fluxible-addons-react/connectToStores';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';

import {slugify} from '../../../utils/strings';

// Flux
import CollectionsStore from '../../../stores/Collections/CollectionsStore';
import ContentsListStore from '../../../stores/Contents/ContentsListStore';
import IntlStore from '../../../stores/Application/IntlStore';
import ProductsHomepageStore from '../../../stores/Products/ProductsHomepageStore';

import fetchContents from '../../../actions/Contents/fetchContents';
import fetchHomepageProducts from '../../../actions/Products/fetchHomepageProducts';

// Required components
import ArticleSummary from '../../common/articles/ArticleSummary';
import Carousel from '../../common/images/Carousel';
import ProductList from '../../common/products/ProductList';
import HomepageFeaturedCollection from './HomepageFeaturedCollection';
import TextSwitcher from './TextSwitcher';

// Translation data for this component
import intlData from './Homepage.intl';

/**
 * Component.
 */
export default class Homepage extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    //*** Required Data ***//

    static fetchData = function (context, params, query, done) {
        async.parallel([
            function (callback) {
                context.executeAction(fetchContents, {tags: 'homepage'}, callback);
            },
            function (callback) {
                context.executeAction(fetchHomepageProducts, {}, callback);
            }
        ], done);
    };

  changeWord() {
      let wordsLenght = this.state.words.length;
        if (this.state.i <= wordsLenght) {
          this.setState({
            currentWord: this.state.words[this.state.i]
          })
          this.state.i === wordsLenght ? this.state.i = 0 : this.state.i++;
        }
    }

    //*** Initial State ***//

    state = {
        banners: this.context.getStore(ContentsListStore).getOrderedContentsOfType('banner', ['homepage'], true),
        articles: this.context.getStore(ContentsListStore).getOrderedContentsOfType('article', ['homepage'], true),
        collections: this.context.getStore(CollectionsStore).getOrderedCollections(['homepageFeatured'], true, 'homepageFeaturedOrder'),
        featuredCategories: this.context.getStore(CollectionsStore).getCollections(['category', 'homepage']),
        featuredCollections: this.context.getStore(CollectionsStore).getCollections(['collection', 'homepage']),
        featuredProducts: this.context.getStore(ProductsHomepageStore).getProducts(),
        words: [
          '\xa0mobile applications',
          '\xa0social media strategies',
          '\xa0eCommerce sites',
          '\xa0logos & branding assets',
          '\xa0original content',
          '\xa0websites',
        ],
        currentWord: '\xa0websites',
        i: 0
    };

    //*** Component Lifecycle ***//

    componentDidMount() {
        // Component styles
        require('./Homepage.scss');

        this.timerID = setInterval(
          () => this.changeWord(),
          4000
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            banners: nextProps._banners,
            articles: nextProps._articles,
            collections: nextProps._collections,
            featuredProducts: nextProps._featuredProducts,
            featuredCategories: nextProps._featuredCategories,
            featuredCollections: nextProps._featuredCollections
        });
    }

    componentWillUnmount () {
      clearInterval(this.timerID);
    }

    //*** Template ***//

    render() {
        let intlStore = this.context.getStore(IntlStore);
        let routeParams = {locale: this.context.getStore(IntlStore).getCurrentLocale()};
        const changeWord = this.state.currentWord || '';
        let isAnyBannerAvailable =
        return (
            <div>
            {this.state.banners.map(function (banner) {
              if (banner.enabled == true){
                return (
                  <div className="homepage__cta">
                    <div className="homepage__banners">
                        <Carousel images={this.state.banners.filter(function (banner) {
                            return banner.body && banner.body.image;
                        }).map(function (banner) {
                            return {
                                src: `//${banner.body.image.url}`,
                                link: banner.body.link
                            };
                        })} />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="home-container">
                   <Link className="hacemos-word" to="servicios" params={routeParams}>
                      <div>{intlStore.getMessage(intlData, 'word')}</div><TextSwitcher name={changeWord} />
                    </Link>
                  </div>
                );
              }
            })}

            </div>
        );
    }
}

/**
 * Flux
 */
Homepage = connectToStores(Homepage, [CollectionsStore, ProductsHomepageStore], (context) => {
    return {
        _banners: context.getStore(ContentsListStore).getOrderedContentsOfType('banner', ['homepage'], true),
        _articles: context.getStore(ContentsListStore).getOrderedContentsOfType('article', ['homepage'], true),
        _collections: context.getStore(CollectionsStore).getOrderedCollections(['homepageFeatured'], true, 'homepageFeaturedOrder'),
        _featuredCategories: context.getStore(CollectionsStore).getCollections(['category', 'homepage']),
        _featuredCollections: context.getStore(CollectionsStore).getCollections(['collection', 'homepage']),
        _featuredProducts: context.getStore(ProductsHomepageStore).getProducts()
    };
});
