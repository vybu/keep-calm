import React from 'react';

const commonSizes = [
    {
        name: 'Letter Size',
        us: '8.5 x 11 inch',
        world: '21.59 x 27.94 cm',
        px: {
            width: 816,
            height: 1056
        }
    }, {
        name: 'A4',
        us: '8.3 x 11.7 inch',
        world: '21.00 x 29.70 cm',
        px: {
            width: 796.8,
            height: 1123.2
        }
    }, {
        name: 'A3',
        us: '11.7 x 16.5 inch',
        world: '29.70 x 42.00 cm',
        px: {
            width: 1123.2,
            height: 1584
        }
    }, {
        name: 'A2',
        us: '16.5 x 23.4 inch',
        world: '42.00 x 59.40 cm',
        px: {
            width: 1584,
            height: 2246.4
        }
    }, {
        name: 'A1',
        us: '23.4 x 33.1 inch',
        world: '59.40 x 84.10 cm',
        px: {
            width: 2246.4,
            height: 3177.6
        }
    }
];


const SizeSelectionItem = ({onClick, sizeItem}) => (
    <div className="SizeSelection-item"
         onClick={onClick}>
        <h4 className="SizeSelection-itemName">{sizeItem.name}</h4>
        <span className="SizeSelection-itemMeasurements">{`${parseInt(sizeItem.px.width)} x ${parseInt(sizeItem.px.height)}`}</span>
    </div>
);

SizeSelectionItem.propTypes = {
    onClick: React.PropTypes.func,
    sizeItem: React.PropTypes.object
};

const CustomValuesItem = ({onClick}) => (
    <div className="SizeSelection-item"
         onClick={onClick}>
        <h4 className="SizeSelection-itemName">Custom</h4>
    </div>
);

CustomValuesItem.propTypes = {
    onClick: React.PropTypes.func
};


const SizeSelectionMain = ({ onSuccessfullSizeSelect, serviceToCallOnSelect }) => {
    return (
        <div className="SizeSelection">
            <h3>Size</h3>
            <div className="SizeSelection-sizes">
                {commonSizes.map((s, i) => <SizeSelectionItem key={i} sizeItem={s} onClick={() => onSuccessfullSizeSelect(serviceToCallOnSelect, s.px)}/>)}
                <CustomValuesItem/>
            </div>
        </div>
    );
};

SizeSelectionMain.propTypes = {
    onSuccessfullSizeSelect: React.PropTypes.func,
    serviceToCallOnSelect: React.PropTypes.string,
};

export default SizeSelectionMain;