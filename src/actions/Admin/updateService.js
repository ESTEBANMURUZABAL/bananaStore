import applicationActions from '../../constants/application';
import serviceActions from '../../constants/services';

export default function updateService(context, payload, done) {
    context.dispatch(serviceActions.SERVICES_ITEM_SAVE);
    context.api.services.update(payload.id, payload.data).then(function successFn(result) {
        context.dispatch(serviceActions.SERVICES_ITEM_SAVE_SUCCESS, result);
        context.dispatch(applicationActions.APPLICATION_POST_NOTIFICATION, {
            type: 'success',
            message: 'Saved'
        });
        done && done();
    }, function errorFn(err) {
        context.dispatch(serviceActions.SERVICES_ITEM_SAVE_ERROR, err.result);
        context.dispatch(applicationActions.APPLICATION_POST_NOTIFICATION, {
            type: 'error',
            message: 'Unable to save'
        });
        done && done();
    });
}
