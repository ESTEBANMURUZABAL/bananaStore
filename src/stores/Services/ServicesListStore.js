/**
 * Imports
 */
import BaseStore from 'fluxible/addons/BaseStore';
import serviceActions from '../../constants/services';

/**
 * Store
 */
class ServicesListStore extends BaseStore {

    static storeName = 'ServicesListStore';

    static handlers = {
        [serviceActions.SERVICES_FIND]: 'handleListRequest',
        [serviceActions.SERVICES_FIND_SUCCESS]: 'handleListSuccess',
        [serviceActions.SERVICES_FIND_ERROR]: 'handleListError'
    };

    constructor(dispatcher) {
        super(dispatcher);
        this.loading = false;
        this.error = undefined;
        this.services = undefined;
    }

    getState() {
        return {
            loading: this.loading,
            error: this.error,
            services: this.services
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

    getServices() {
        if (this.services && this.services.items) {
            return this.services.items;
        } else {
            return [];
        }
    }

    //
    // Handlers
    //

    handleListRequest() {
        this.loading = true;
        this.emitChange();
    }

    handleListSuccess(payload) {
        this.loading = false;
        this.error = null;
        this.services = payload;
        this.emitChange();
    }

    handleListError(payload) {
        this.loading = false;
        this.error = payload;
        this.emitChange();
    }
}

/**
 * Export
 */
export default ServicesListStore;
