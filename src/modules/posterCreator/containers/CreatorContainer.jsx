import React from 'react';
import { connect } from 'react-redux';
import TransportAgent from '../../../common/transport';
import * as actions from '../actions';
import { getAll, handleFontMissMatch } from '../selectors';
import Form from '../components/form/index.jsx';
import posterCanvas from '../../posterCanvas';
import Noop from '../../../common/components/Noop.jsx';
import Loading from '../../../common/components/Loading.jsx';

const { PosterCanvasContainer } = posterCanvas.components;


function getMainPosterSizeParams() {
    const DEFAULT_HEIGHT = 570;
    const DEFAULT_WIDTH = DEFAULT_HEIGHT / 5 * 4;
    const w = window.innerWidth;
    const PADDING = 0.20;

    if (w - w * PADDING < DEFAULT_WIDTH) {
        return [w - w * PADDING, (w - w * PADDING)* DEFAULT_HEIGHT/DEFAULT_WIDTH];
    } else {
        return [DEFAULT_WIDTH, DEFAULT_HEIGHT];
    }
}

class CreatorContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false
        };

        this.forceResize = this.forceResize.bind(this);
    }

    componentWillMount() {
        if (this.props.id) {
            this.setState({ isLoading: true });
            TransportAgent.getDataById(this.props.id)
                .then(({ data, isSuccessfull }) => {
                    isSuccessfull && this.props.loadFormStateFromJson(data.formConfig);
                    this.setState({ isLoading: false });
                })
                .catch(() => this.setState({ isLoading: false }));
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.forceResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.forceResize);
    }

    forceResize() {
        this.forceUpdate();
    }


    render() {
        const props = this.props;

        if (this.state.isLoading) {
            return <Loading/>;
        }

        if (process.env.SERVER_RENDER) {
            return <Noop/>;
        }
        const [w, h] = getMainPosterSizeParams();

        return (
            <div className="CreatorContainer">
                <Form {...props}/>
                <PosterCanvasContainer {...props}
                                       text={props.text}
                                       width={w}
                                       height={h}/>
            </div>
        );
    }
}

export default connect(state => handleFontMissMatch(getAll(state)), actions)(CreatorContainer);
