import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as contants from '../constants';
import { getAll } from '../selectors';
import OverlayModalBase from '../components/OverlayModalBase.jsx';
import ShareLinkMain from '../components/ShareLinkMain.jsx';
import SizeSelectionMain from '../components/SizeSelectionMain.jsx';

const OverlayModal = (props) => {
    if (props.type === contants.TYPE_NOT_VISIBLE) {
        return null;
    } else if (props.type === contants.TYPE_SHARE_LINK) {
        return (
            <OverlayModalBase {...props}>
                <ShareLinkMain {...props}/>
            </OverlayModalBase>);
    } else if (props.type === contants.TYPE_SELECT_SIZE) {
        return (
            <OverlayModalBase {...props}>
                <SizeSelectionMain {...props}/>
            </OverlayModalBase>);
    } else {
        return null;
    }


};

export default connect(getAll, actions)(OverlayModal);