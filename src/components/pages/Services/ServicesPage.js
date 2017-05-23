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
import ServiceContainer from './ServiceContainer';
import messages from './messages';

// Translation data for this component
import intlData from './Services.intl';

/**
 * Component.
 */
class ServicesPage extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);

      this.state = {
        activeIndex: 'Websites',
      };
    }

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    handleClick(index) {
      this.setState({ activeIndex: index });
    }

    //*** Required Data ***//

    // static fetchData = function (context, params, query, done) {
    //     async.parallel([
    //         function (callback) {
    //             context.executeAction(fetchContents, {tags: 'homepage'}, callback);
    //         },
    //         function (callback) {
    //             context.executeAction(fetchHomepageProducts, {}, callback);
    //         }
    //     ], done);
    // };

    //*** Initial State ***//

    // state = {
    //     banners: this.context.getStore(ContentsListStore).getOrderedContentsOfType('banner', ['homepage'], true),
    //     articles: this.context.getStore(ContentsListStore).getOrderedContentsOfType('article', ['homepage'], true),
    //     collections: this.context.getStore(CollectionsStore).getOrderedCollections(['homepageFeatured'], true, 'homepageFeaturedOrder'),
    //     featuredCategories: this.context.getStore(CollectionsStore).getCollections(['category', 'homepage']),
    //     featuredCollections: this.context.getStore(CollectionsStore).getCollections(['collection', 'homepage']),
    //     featuredProducts: this.context.getStore(ProductsHomepageStore).getProducts()
    // };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./ServicesPage.scss');
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         banners: nextProps._banners,
    //         articles: nextProps._articles,
    //         collections: nextProps._collections,
    //         featuredProducts: nextProps._featuredProducts,
    //         featuredCategories: nextProps._featuredCategories,
    //         featuredCollections: nextProps._featuredCollections
    //     });
    // }

    //*** Template ***//

      render() {
        const Components = {
          'Websites': Websites,
          'SocialMedia': SocialMedia,
          'MobileApps': MobileApps
        };

        const Component = Components[this.state.activeIndex];

        //
        // Helper methods & variables
        //

        let intlStore = this.context.getStore(IntlStore);

        // Base route params
        let routeParams = {locale: this.context.getStore(IntlStore).getCurrentLocale()};



        //
        // Return
        //
        return (
          <div className="service-wrapper">
            <Helmet
              meta={[{ name: 'description', content: 'Services page' },
            ]}/>
            <div className="service-tabs-container">
              <ServiceContainer index="Websites" isActive={this.state.activeIndex==='Websites'} onClick={this.handleClick.bind(this)}>website text</ServiceContainer>
              <ServiceContainer index="SocialMedia" isActive={this.state.activeIndex==='SocialMedia'} onClick={this.handleClick.bind(this)}>social text</ServiceContainer>
              <ServiceContainer index="MobileApps" isActive={this.state.activeIndex==='MobileApps'} onClick={this.handleClick.bind(this)}>mobile app text</ServiceContainer>
            </div>
            <div className="service-info-container">
              <Component />
            </div>
          </div>
        );
    }
}

/**
 * Flux
 */
// Homepage = connectToStores(Homepage, [CollectionsStore, ProductsHomepageStore], (context) => {
//     return {
//         _banners: context.getStore(ContentsListStore).getOrderedContentsOfType('banner', ['homepage'], true),
//         _articles: context.getStore(ContentsListStore).getOrderedContentsOfType('article', ['homepage'], true),
//         _collections: context.getStore(CollectionsStore).getOrderedCollections(['homepageFeatured'], true, 'homepageFeaturedOrder'),
//         _featuredCategories: context.getStore(CollectionsStore).getCollections(['category', 'homepage']),
//         _featuredCollections: context.getStore(CollectionsStore).getCollections(['collection', 'homepage']),
//         _featuredProducts: context.getStore(ProductsHomepageStore).getProducts()
//     };
// });

/**
 * Export.
 */
export default ServicesPage;
