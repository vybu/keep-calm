import * as constants from './constants';

export const showOverlayModal = (modalType, linkValue) => ({ type: constants.SHOW, modalType, linkValue });
export const hideOverlayModal = () => ({ type: constants.HIDE });
