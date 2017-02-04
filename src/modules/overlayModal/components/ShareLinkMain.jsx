import React from 'react';


class ShareLinkMain extends React.Component {

    constructor(props) {
        super(props);

        this.tryCopy = this.tryCopy.bind(this);

        this.state = {
            hasCopied: false
        };
    }

    tryCopy() {
        this.valueField.select();
        try {
            document.execCommand('copy');
            this.setState({ hasCopied: true });
        } catch (e) {}
    }

    render() {
        return (
            <div className="ShareLink">
                <input ref={r => this.valueField = r} onClick={this.tryCopy}
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