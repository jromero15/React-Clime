import React from 'react';
import PropTypes from 'prop-types';

const Weatherextrainfo = ({humidity, wind}) => (
    <div>
        <span>{humidity + ' %  |'}</span>
        <span>{wind + 'wind'}</span>
        </div>
);
Weatherextrainfo.PropTypes = { 
humidity: PropTypes.number.isRequired,
wind: PropTypes.string.isRequired,
};

export default Weatherextrainfo;