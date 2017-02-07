import { combineReducers } from 'redux';
import posterCreator from '../../modules/posterCreator';
import overlayModal from '../../modules/overlayModal';
import posterCanvas from '../../modules/posterCanvas';

export default combineReducers({
    [posterCreator.constants.NAME]: posterCreator.reducer,
    [overlayModal.constants.NAME]: overlayModal.reducer,
    [posterCanvas.constants.NAME]: posterCanvas.reducer,
});