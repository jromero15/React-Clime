import React from 'react';

const Weatherextrainfo = ({humidity, wind}) => (
    <div>
        <span>{humidity + ' %  |'}</span>
        <span>{wind + 'wind'}</span>
        </div>
);

export default Weatherextrainfo;