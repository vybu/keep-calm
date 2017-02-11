import React from 'react';

class GeneratorFormPart extends React.Component {
    render() {
        return (
            <div className="GeneratorForm">
                <button>Random</button>
                <button>Funny</button>
                <button>Cute</button>
                <button>Luxurious</button>
            </div>
        );
    }
}

GeneratorFormPart.propTypes = {

};

export default GeneratorFormPart;