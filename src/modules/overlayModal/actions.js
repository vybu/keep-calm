import * as constants from './constants';
import * as posterCanvasActions from '../posterCanvas/actions';

export const showOverlayModal = (modalType, { linkValue, serviceToCallOnSelect }) => ({
    type: constants.SHOW,
    modalType,
    linkValue,
    serviceToCallOnSelect
});
export const hideOverlayModal = () => ({ type: constants.HIDE });

export const onSuccessfullSizeSelect = (serviceToCallOnSelect, dimensions) => posterCanvasActions.retrieveContent(serviceToCallOnSelect, dimensions);