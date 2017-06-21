import serviceActions from '../../constants/services';

export default function addService(context, payload, done) {
    context.dispatch(serviceActions.SERVICES_ADD);
    context.api.services.create(payload).then(function successFn(result) {
        context.dispatch(serviceActions.SERVICES_ADD_SUCCESS, result);
        done && done();
    }, function errorFn(err) {
        context.dispatch(serviceActions.SERVICES_ADD_ERROR, err.result);
        done && done();
    });
}
