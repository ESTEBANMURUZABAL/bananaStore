/**
 * Imports
 */
import BaseStore from 'fluxible/addons/BaseStore';
import serviceActions from '../../constants/services';

/**
 * Store
 */
class ServicesAddStore extends BaseStore {

    static storeName = 'ServicesAddStore';

    static handlers = {
        [serviceActions.SERVICES_ADD]: 'handleAddRequest',
        [serviceActions.SERVICES_ADD_SUCCESS]: 'handleAddSuccess',
        [serviceActions.SERVICES_ADD_ERROR]: 'handleAddError'
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

    handleAddRequest() {
        this.loading = true;
        this.emitChange();
    }

    handleAddSuccess(payload) {
        this.loading = false;
        this.error = null;
        this.service = payload;
        this.emitChange();
    }

    handleAddError(payload) {
        this.loading = false;
        this.error = payload || 'unknown';
        this.emitChange();
    }
}

/**
 * Export
 */
export default ServicesAddStore;
