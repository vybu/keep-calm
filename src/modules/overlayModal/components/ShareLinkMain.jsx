import React from 'react';
import Clipboard from 'clipboard';


class ShareLinkMain extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasCopied: false
        };
    }

    componentDidMount() {
        this.clipboard = new Clipboard('.ShareLink-value', {
            text: () => this.props.linkValue
        });

        this.clipboard.on('success', e => {
            if (e.text === this.props.linkValue) {
                this.setState({ hasCopied: true });
            }
        });
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
        return (
            <div className="ShareLink">
                <input ref={r => this.valueField = r} onClick={() => this.valueField.select()}
                       className="ShareLink-value"
                       defaultValue={this.props.linkValue}/>
            </div>
        );
    }
}

ShareLinkMain.propTypes = {
    linkValue: React.PropTypes.string
};

export default ShareLinkMain;