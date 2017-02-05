import React from 'react';
import OptionButton from './OptionButton.jsx';
import { retrieveContent } from '../../actions';
import * as actions from '../../constants';
import { connect } from 'react-redux';
import overlayModal from '../../../overlayModal';

const ContentRetrieveExternal = ({ dispatch }) => (
    <div className="ContentRetrieveExternal">
        <OptionButton
            onClick={() => dispatch(overlayModal.actions.showOverlayModal(overlayModal.constants.TYPE_SELECT_SIZE, { serviceToCallOnSelect: actions.SERVICE_DOWNLOAD }))}
            name="Download"/>
        <OptionButton
            onClick={() => dispatch(overlayModal.actions.showOverlayModal(overlayModal.constants.TYPE_SELECT_SIZE, { serviceToCallOnSelect: actions.SERVICE_PRINT }))}
            name="Print"/>
        <OptionButton onClick={() => dispatch(retrieveContent(actions.SERVICE_SHARE_URL))} name="Share Url"/>
    </div>
);

ContentRetrieveExternal.propTypes = {
    dispatch: React.PropTypes.func
};

export default connect()(ContentRetrieveExternal);
