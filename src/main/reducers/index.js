import { combineReducers } from 'redux';
import posterCreator from '../../modules/posterCreator';

export default combineReducers({
    [posterCreator.constants.NAME]: posterCreator.reducer,
});