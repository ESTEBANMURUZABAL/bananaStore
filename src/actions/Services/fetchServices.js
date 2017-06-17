import servicesActions from '../../constants/services';

export default function fetchServices(context, payload, done) {
    context.dispatch(servicesActions.SERVICES_FIND);
    context.api.services.find(payload).then(function successFn(result) {
        context.dispatch(servicesActions.SERVICES_FIND_SUCCESS, result);
        done && done();
    }, function errorFn(err) {
        context.dispatch(servicesActions.SERVICES_FIND_ERROR, err.result);
        done && done();
    });
}
