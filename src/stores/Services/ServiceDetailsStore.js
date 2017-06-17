/**
 * Imports
 */
import BaseStore from 'fluxible/addons/BaseStore';
import serviceActions from '../../constants/services';

/**
 * Store
 */
class ServiceDetailsStore extends BaseStore {

    static storeName = 'ServiceDetailsStore';

    static handlers = {
        [serviceActions.SERVICES_ITEM]: 'handleRequest',
        [serviceActions.SERVICES_ITEM_SUCCESS]: 'handleSuccess',
        [serviceActions.SERVICES_ITEM_ERROR]: 'handleError',
        [serviceActions.SERVICES_ITEM_SAVE]: 'handleRequest',
        [serviceActions.SERVICES_ITEM_SAVE_SUCCESS]: 'handleSuccess',
        [serviceActions.SERVICES_ITEM_SAVE_ERROR]: 'handleError'
    };

    constructor(dispatcher) {
        super(dispatcher);
        this.loading = false;
        this.error = undefined;
        this.service = undefined;
    }

    getState() {
        return {
            loading: this.loading,
            error: this.error,
            service: this.service
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
        this.service = state.service;
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

    getService() {
        return this.service;
    }

    //
    // Handlers
    //

    handleRequest() {
        this.loading = true;
        this.emitChange();
    }

    handleSuccess(payload) {
        this.loading = false;
        this.error = null;
        this.service = payload;
        this.emitChange();
    }

    handleError(payload) {
        this.loading = false;
        this.error = payload;
        this.emitChange();
    }
}

/**
 * Export
 */
export default ServiceDetailsStore;
