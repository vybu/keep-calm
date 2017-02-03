import { combineReducers } from 'redux';
import posterCreator from '../../modules/posterCreator';
import overlayModal from '../../modules/overlayModal';

export default combineReducers({
    [posterCreator.constants.NAME]: posterCreator.reducer,
    [overlayModal.constants.NAME]: overlayModal.reducer,
});