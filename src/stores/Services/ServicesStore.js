/**
 * Imports
 */
import BaseStore from 'fluxible/addons/BaseStore';
import serviceActions from '../../constants/services';

/**
 * Store
 */
class ServicesStore extends BaseStore {

    static storeName = 'ServicesStore';

    static handlers = {
        [serviceActions.SERVICES]: 'handleRequest',
        [serviceActions.SERVICES_SUCCESS]: 'handleSuccess',
        [serviceActions.SERVICES_ERROR]: 'handleError',

        [serviceActions.SERVICES_ITEM_SAVE_SUCCESS]: 'handleItemSaveSuccess',

        [serviceActions.SERVICES_BULK_SAVE]: 'handleBulkSaveRequest',
        [serviceActions.SERVICES_BULK_SAVE_SUCCESS]: 'handleBulkSaveSuccess',
        [serviceActions.SERVICES_BULK_SAVE_ERROR]: 'handleBulkSaveError'
    };

    constructor(dispatcher) {
        super(dispatcher);
        this.loading = false;
        this.error = undefined;
        this.services = undefined;
        this.serviceTree = undefined;
    }

    getState() {
        return {
            loading: this.loading,
            error: this.error,
            services: this.services,
            serviceTree: this.serviceTree
        }
    }

    //
    // Isomorphic stuff
    //

    dehydrate() {
        return this.getState();
    }

    rehydrate(state) {
        this.loading = state.loading;
        this.error = state.error;
        this.services = state.services;
        this.serviceTree = state.serviceTree;
    }

    //
    // Getters
    //

    isLoading() {
        return this.loading === true;
    }

    getError() {
        return this.error;
    }

    /**
     * Returns the services that contain all of the given tags
     * @param {array} tags
     * @param {boolean} enabled - Return only the ones that are enabled
     */
    getServices(tags, enabled) {
        tags = tags || [];
        if (this.services && this.services.items) {
            return this.services.items.filter(function (item) {
                let containsAllTags = tags.every(function(val) { return item.tags.indexOf(val) >= 0; });
                return (enabled === true) ? item.enabled && containsAllTags : containsAllTags;
            });
        } else {
            return [];
        }
    }

    /**
     * Returns the services ordered
     * @param {array} tags - specific tags the services must have
     * @param {boolean} enabled - Return only the ones that are enabled
     * @param {string} orderingKey - (optional) the key from metadata that should be used to order (default: 'order')
     */
    getOrderedServices(tags, enabled, orderingKey) {
        let services = this.getServices(tags, enabled);
        let _orderingKey = orderingKey || 'order';
        services.sort(function (a, b) {
            if (a.metadata[_orderingKey] < b.metadata[_orderingKey])
                return -1;
            else if (a.metadata[_orderingKey] > b.metadata[_orderingKey] || !a.metadata[_orderingKey])
                return 1;
            else
                return 0;
        });
        return services;
    }

    /**
     * Returns the services organized top-down according to parent information
     */
    getServicesTree() {
        return this.serviceTree;
    }

    /**
     * Returns the ordered list of Main Navigation services
     */
    getMainNavigationServices() {
        let services = this.getServices(['mainNavigation']);
        services.sort(function (a, b) {
            if (a.metadata.mainNavigationOrder < b.metadata.mainNavigationOrder)
                return -1;
            else if (a.metadata.mainNavigationOrder > b.metadata.mainNavigationOrder || !a.metadata.mainNavigationOrder)
                return 1;
            else
                return 0;
        });
        return services;
    }

    /**
     * Returns the Service with the given ID
     */
    getService(id) {
        if (this.services && this.services.items) {
            return this.services.items.filter(function (item) {
                return item.id === id;
            })[0];
        } else {
            return null;
        }
    }

    //
    // Handlers
    //

    // Request List

    handleRequest() {
        this.loading = true;
        this.emitChange();
    }

    handleSuccess(payload) {
        this.loading = false;
        this.error = null;
        this.services = payload;
        this._buildServiceTree();
        this.emitChange();
    }

    handleError(payload) {
        this.loading = false;
        this.error = payload;
        this.emitChange();
    }

    // Item Update

    handleItemSaveSuccess(payload) {
        let updatedService = payload;
        if (this.services && this.services.items) {
            for (let i=0, len=this.services.items.length; i<len; i++) {
                if (this.services.items[i].id === updatedService.id) {
                    this.services.items[i] = updatedService;
                }
            }
        }
        this._buildServiceTree();
        this.emitChange();
    }

    // Bulk Update

    handleBulkSaveRequest() {
        this.loading = true;
        this.emitChange();
    }

    handleBulkSaveSuccess(payload) {
        this.loading = false;
        this.error = null;
        if (this.services && this.services.items) {
            payload.forEach((updatedService) => {
                for (let i=0, len=this.services.items.length; i<len; i++) {
                    if (this.services.items[i].id === updatedService.id) {
                        this.services.items[i] = updatedService;
                    }
                }
            });
        }
        this._buildServiceTree();
        this.emitChange();
    }

    handleBulkSaveError(payload) {
        this.loading = false;
        this.error = payload;
        this.emitChange();
    }

    //
    // Private methods
    //

    /**
     * Create a top-down service tree from the current state of services
     * @private
     */
    _buildServiceTree() {
        if (!this.services || !this.services.items) {
            this.serviceTree =  [];
        } else {
            let services = JSON.parse(JSON.stringify(this.services.items));
            let addChildren = (service) => {
                service.children = services.filter(c => c.parentId === service.id);
                service.children.forEach(c => addChildren(c));
            };
            let serviceTree = services.filter(c => !c.parentId);
            serviceTree.forEach(c => addChildren(c));
            this.serviceTree = serviceTree;
        }
    }
}

/**
 * Export
 */
export default ServicesStore;
