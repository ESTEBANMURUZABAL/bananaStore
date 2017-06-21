import serviceActions from '../../constants/services';

export default function fetchAllServices(context, payload, done) {
    context.dispatch(serviceActions.SERVICES);
    context.api.services.getAll().then(function successFn(result) {
        context.dispatch(serviceActions.SERVICES_SUCCESS, result);
        done && done();
    }, function errorFn(err) {
        context.dispatch(serviceActions.SERVICES_ERROR, err.result);
        done && done();
    });
}
