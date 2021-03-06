/**
 * Imports
 */
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

// Required components
import Application from './components/pages/Application/Application';
import NotFound from './components/pages/NotFound/NotFound';

import Homepage from './components/pages/Homepage/Homepage';
import Checkout from './components/pages/Checkout/Checkout';
import CollectionProductsPage from './components/pages/Collections/CollectionProductsPage';
import ProductListingPage from './components/pages/Products/ProductListingPage';
import ProductPage from './components/pages/Products/ProductPage';

import Account from './components/pages/Account/Account';
import AccountBase from './components/pages/Account/AccountBase';
import AccountOrderDetailsPage from './components/pages/Account/AccountOrderDetailsPage';
import Login from './components/pages/Account/Login';
import Logout from './components/pages/Account/Logout';
import Register from './components/pages/Account/Register';
import RegisterConfirm from './components/pages/Account/RegisterConfirm';
import Reset from './components/pages/Account/Reset';
import ResetConfirm from './components/pages/Account/ResetConfirm';

//Menu tabs components
import AboutPage from './components/pages/About/AboutPage';
import ServicesPage from './components/pages/Services/ServicesPage';
import ContactPage from './components/pages/Contact/ContactPage';

//Select web pages components
import SelectAdminPage from './components/pages/SelectPage/Web/SelectAdminPage';
import SelectEcommercePage from './components/pages/SelectPage/Web/SelectEcommercePage';
import SelectLandingPage from './components/pages/SelectPage/Web/SelectLandingPage';
import SelectCustomPage from './components/pages/SelectPage/Web/SelectCustomPage';

//Select mobile pages components
import SelectAdminMobile from './components/pages/SelectPage/Mobile/SelectAdminMobile';
import SelectEcommerceMobile from './components/pages/SelectPage/Mobile/SelectEcommerceMobile';
import SelectLandingMobile from './components/pages/SelectPage/Mobile/SelectLandingMobile';
import SelectCustomMobile from './components/pages/SelectPage/Mobile/SelectCustomMobile';

//Select page components
import EditPage from './components/pages/EditPage/EditPage';
import PropousalPage from './components/pages/PropousalPage/PropousalPage';

import StoresPage from './components/pages/StaticContent/StoresPage';
import InfoPage from './components/pages/StaticContent/InfoPage';

import ArticlesListingPage from './components/pages/Articles/ArticlesListingPage';
import ArticlePage from './components/pages/Articles/ArticlePage';

import Admin from './components/pages/Admin/Admin';
import AdminCollections from './components/pages/Admin/Collections/AdminCollections';
import AdminCollectionsEdit from './components/pages/Admin/Collections/AdminCollectionsEdit';
import AdminServices from './components/pages/Admin/Services/AdminServices';
import AdminServicesEdit from './components/pages/Admin/Services/AdminServicesEdit';
import AdminContents from './components/pages/Admin/Contents/AdminContents';
import AdminContentsEdit from './components/pages/Admin/Contents/AdminContentsEdit';
import AdminCustomers from './components/pages/Admin/Customers/AdminCustomers';
import AdminDashboard from './components/pages/Admin/Dashboard/AdminDashboard';
import AdminOrders from './components/pages/Admin/Orders/AdminOrders';
import AdminOrdersEdit from './components/pages/Admin/Orders/AdminOrdersEdit';
import AdminProducts from './components/pages/Admin/Products/AdminProducts';
import AdminProductsEdit from './components/pages/Admin/Products/AdminProductsEdit';

/**
 * Application's Routes
 */
const routes = (
    <Route name="app" path="/:locale" handler={Application}>
        <DefaultRoute name="homepage" handler={Homepage} />
        <Route name="login" handler={Login} />
        <Route name="logout" handler={Logout} />
        <Route name="admin-panel" handler={Admin}>
            <DefaultRoute name="admin-dashboard" handler={AdminDashboard} />
        </Route>
        <Route name="register" handler={Register} />
        <Route name="register-confirm" path="register/confirm/:token" handler={RegisterConfirm} />
        <Route name="reset" handler={Reset} />
        <Route name="reset-confirm" path="reset/confirm/:token" handler={ResetConfirm} />
        <Route name="account" handler={AccountBase}>
            <DefaultRoute handler={Account} />
            <Route name="account-order-details" path="orders/:orderId/?" handler={AccountOrderDetailsPage} />
        </Route>
        <Route name="collection" path="collections/:collectionId/?" handler={CollectionProductsPage} />
        <Route name="collection-slug" path="collections/:collectionId/:collectionSlug/?" handler={CollectionProductsPage} />
        <Route name="products" path="products/?" handler={ProductListingPage} />
        <Route name="product" path="products/:productId/?" handler={ProductPage} />
        <Route name="product-slug" path="products/:productId/:productSlug/?" handler={ProductPage} />
        <Route name="checkout" handler={Checkout} />
        <Route name="stores" handler={StoresPage} />
        <Route name="info" handler={InfoPage} />
        <Route name="articles" path="articles/?" handler={ArticlesListingPage} />

        <Route name="servicios" handler={ServicesPage} />
        <Route name="contacto" handler={ContactPage} />
        <Route name="nosotros" handler={AboutPage} />

        <Route name="select-admin-page" path="select-admin-page" handler={SelectAdminPage} />
        <Route name="select-custom-page" path="select-custom-page" handler={SelectCustomPage} />
        <Route name="select-ecommerce-page" path="select-ecommerce-page" handler={SelectEcommercePage} />
        <Route name="select-landing-page" path="select-landing-page" handler={SelectLandingPage} />

        <Route name="select-admin-mobile" path="select-admin-mobile" handler={SelectAdminMobile} />
        <Route name="select-custom-mobile" path="select-custom-mobile" handler={SelectCustomMobile} />
        <Route name="select-ecommerce-mobile" path="select-ecommerce-mobile" handler={SelectEcommerceMobile} />
        <Route name="select-landing-mobile" path="select-landing-mobile" handler={SelectLandingMobile} />

        <Route name="edit-page" path="edit-page" handler={EditPage} />
        <Route name="propousal-page" path="propousal-page/:packNum/:templateId/?" handler={PropousalPage} />

        <Route name="article" path="articles/:contentId/?" handler={ArticlePage} />
        <Route name="article-slug" path="articles/:contentId/:contentSlug/?" handler={ArticlePage} />
        <Route name="adm" handler={Admin}>
            <DefaultRoute name="adm-dashboard" handler={AdminDashboard} />
            <Route name="adm-collections" path="collections" handler={AdminCollections} />
            <Route name="adm-collection-edit" path="collections/:collectionId/?" handler={AdminCollectionsEdit} />
            <Route name="adm-services" path="services" handler={AdminServices} />
            <Route name="adm-service-edit" path="services/:serviceId/?" handler={AdminServicesEdit} />
            <Route name="adm-contents" path="contents" handler={AdminContents} />
            <Route name="adm-content-edit" path="contents/:contentId/?" handler={AdminContentsEdit} />
            <Route name="adm-customers" path="customers" handler={AdminCustomers} />
            <Route name="adm-orders" path="orders" handler={AdminOrders} />
            <Route name="adm-order-edit" path="orders/:orderId/?" handler={AdminOrdersEdit} />
            <Route name="adm-products" path="products" handler={AdminProducts} />
            <Route name="adm-product-edit" path="products/:productId/?" handler={AdminProductsEdit} />
        </Route>
        <NotFoundRoute name="not-found" handler={NotFound} />
    </Route>
);

/**
 * Exports
 */
export default routes;
