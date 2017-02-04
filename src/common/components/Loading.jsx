import React from 'react';

const Loading = () => (
    <div
        style={{ minWidth: '100%', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        className="Loading">
            <div className="Loading-spinner">Loading...</div>
    </div>
);

export default Loading;