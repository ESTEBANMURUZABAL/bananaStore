/**
 * Imports
 */
import superagent from 'superagent';

/**
 * Atlas Services API wrapper
 */
class ServicesAPI {

    /**
     * Constructor
     * @param options - Object containing ATLAS settings
     * @param getAuthToken - Method that returns the Authorization token
     */
    constructor({options, getAuthToken}) {
        this.baseUrl = options.baseUrl;
        this.getAuthToken = getAuthToken;
    }

    /**
     * All API calls should be wrapped/handled/called by this in method order
     * for any common additional stuff to be done (e.g. adding Authorization headers)
     */
    _wrapAndRequest(request, resolve, reject) {
        if (this.getAuthToken()) {
            request.set('Authorization', this.getAuthToken());
        }
        request.end(function (err, result) {
            if (err) {
                reject({status: err.status, result: (result) ? result.body : null});
            } else {
                resolve(result.body);
            }
        });
    }

    /**
     * Create Service
     */
    create(payload) {
        return new Promise((resolve, reject) => {
            let request = superagent.post(`${this.baseUrl}/services`).send(payload);
            this._wrapAndRequest(request, resolve, reject);
        });
    }

    /**
     * Service collection
     */
    find(params) {
        return new Promise((resolve, reject) => {
            let request = superagent.get(`${this.baseUrl}/services`).query(params || {});
            this._wrapAndRequest(request, resolve, reject);
        });
    }

    /**
     * Delete Service
     */
     delete(serviceId) {
         return new Promise((resolve, reject) => {
             let request = superagent.delete(`${this.baseUrl}/services/${serviceId}`);
             this._wrapAndRequest(request, resolve, reject);
         });
     }
    /**
     * Fetch Service with given ID
     */
    get(serviceId) {
        return new Promise((resolve, reject) => {
            let request = superagent.get(`${this.baseUrl}/services/${serviceId}`);
            this._wrapAndRequest(request, resolve, reject);
        });
    }

    /**
     * Update Service
     */
    update(serviceId, payload) {
        return new Promise((resolve, reject) => {
            let request = superagent.put(`${this.baseUrl}/services/${serviceId}`).send(payload);
            this._wrapAndRequest(request, resolve, reject);
        });
    }

    /**
     * Upload service information
     */
    upload(resource, file) {
        return new Promise((resolve, reject) => {

            let formData = new FormData();
            formData.append('file', file);
            formData.append('resource', resource);

            let request = superagent.post(`${this.baseUrl}/services/upload`).send(formData);
            this._wrapAndRequest(request, resolve, reject);
        });
    }
}

/**
 * Exports
 */
export default ServicesAPI;
