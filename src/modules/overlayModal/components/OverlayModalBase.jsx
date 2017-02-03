import React from 'react';

const OverlayModalBase = (props) => {
    return (
        <div onClick={props.hideOverlayModal} className={'OverlayModal'}>
            <div onClick={ev => ev.stopPropagation()} className="OverlayModal-main">
                <span onClick={() => props.hideOverlayModal()} className="OverlayModal-close">✕</span>
                {props.children}
            </div>
        </div>
    );
};

OverlayModalBase.propTypes = {
    hideOverlayModal: React.PropTypes.func
};

export default OverlayModalBase;