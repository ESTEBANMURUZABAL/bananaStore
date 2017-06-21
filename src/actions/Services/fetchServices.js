import serviceActions from '../../constants/services';

export default function fetchServices(context, payload, done) {
    context.dispatch(serviceActions.SERVICES_FIND);
    context.api.services.find(payload).then(function successFn(result) {
        context.dispatch(serviceActions.SERVICES_FIND_SUCCESS, result);
        done && done();
    }, function errorFn(err) {
        context.dispatch(serviceActions.SERVICES_FIND_ERROR, err.result);
        done && done();
    });
}
