import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
const Location = (props) => {
    const { city } = props;
    return (
        <div className="locacioncont">
            <h1>
                {city}
            </h1>
        </div>);
};

Location.prototype = {
    city: PropTypes.number.isRequired,
}
export default Location;