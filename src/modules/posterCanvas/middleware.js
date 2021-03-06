import * as actions from './constants';
import downloadService from './services/downloadService';
import printService from './services/printService';
import linkService from './services/linkService';

function handleRetrieveConstantAction({serviceType, options}, state, store) {
    switch (serviceType) {
        case actions.SERVICE_DOWNLOAD:
            return downloadService(options, state);
        case actions.SERVICE_PRINT:
            return printService(options, state);
        case actions.SERVICE_SHARE_URL:
            return linkService(options, state, store.dispatch);
    }
}

const handleRetrieveContentActions = store => next => action => {
    if (action.type === actions.RETRIEVE_CONTENT) {
        handleRetrieveConstantAction(action, store.getState(), store);
    } else {
        next(action);
    }
};

export default handleRetrieveContentActions;