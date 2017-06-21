import applicationActions from '../../constants/application';
import serviceActions from '../../constants/services';

export default function deleteService(context, payload, done) {
    context.dispatch(serviceActions.SERVICES_ITEM_DELETE);
    context.api.services.delete(payload).then(function successFn(result) {
        context.dispatch(serviceActions.SERVICES_ITEM_DELETE_SUCCESS, result);
        context.dispatch(applicationActions.APPLICATION_POST_NOTIFICATION, {
            type: 'success',
            message: 'Deleted'
        });
        done && done();
    }, function errorFn(err) {
        context.dispatch(serviceActions.SERVICES_ITEM_DELETE_ERROR, err.result);
        context.dispatch(applicationActions.APPLICATION_POST_NOTIFICATION, {
            type: 'error',
            message: 'Unable to delete'
        });
        done && done();
    });
}
