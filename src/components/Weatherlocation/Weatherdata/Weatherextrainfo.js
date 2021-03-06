import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

const Weatherextrainfo = ({ humidity, wind }) => (
    <div className='Weatherextrainfo' >
        <span className="extrainfotext">Humedad:{humidity + ' % '}</span>
        <span className="extrainfotext">Vientos:{wind + 'wind'}</span>
    </div>
);
Weatherextrainfo.PropTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default Weatherextrainfo;