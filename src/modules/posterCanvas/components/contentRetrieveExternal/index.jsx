import React from 'react';
import OptionButton from './OptionButton.jsx';
import { retrieveContent } from '../../actions';
import * as actions from '../../constants';
import { connect } from 'react-redux';

const ContentRetrieveExternal = ({ dispatch }) => (
    <div className="ContentRetrieveExternal">
        <OptionButton onClick={() => dispatch(retrieveContent(actions.SERVICE_DOWNLOAD))} name="Download"/>
        <OptionButton onClick={() => dispatch(retrieveContent(actions.SERVICE_PRINT))} name="Print"/>
        {/*<OptionButton onClick={() => dispatch(retrieveContent(actions.SERVICE_SHARE_URL))} name="Share Url"/>*/}
    </div>
);

ContentRetrieveExternal.propTypes = {
    dispatch: React.PropTypes.func
};

export default connect()(ContentRetrieveExternal);
