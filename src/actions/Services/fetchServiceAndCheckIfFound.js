import applicationActions from '../../constants/application';
import serviceActions from '../../constants/services';

export default function fetchServiceAndCheckIfFound(context, payload, done) {
    context.dispatch(serviceActions.SERVICES_ITEM);
    context.api.services.get(payload).then(function successFn(result) {
        context.dispatch(serviceActions.SERVICES_ITEM_SUCCESS, result);
        done && done();
    }, function errorFn(err) {
        context.dispatch(serviceActions.SERVICES_ITEM_ERROR, err.result);
        context.dispatch(applicationActions.APPLICATION_ROUTE_ERROR, err.status);
        done && done();
    });
}
