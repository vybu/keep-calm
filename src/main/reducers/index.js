import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import posterCreator from '../../modules/posterCreator';
import overlayModal from '../../modules/overlayModal';
import posterCanvas from '../../modules/posterCanvas';

export default enableBatching(combineReducers({
    [posterCreator.constants.NAME]: posterCreator.reducer,
    [overlayModal.constants.NAME]: overlayModal.reducer,
    [posterCanvas.constants.NAME]: posterCanvas.reducer,
}));