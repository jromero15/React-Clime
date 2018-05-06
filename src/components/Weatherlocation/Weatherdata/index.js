import React from 'react';
import PropTypes from 'prop-types';
import Weathertemperature from './Weathertemperature';
import Weatherextrainfo from './Weatherextrainfo';
import { RAIN, CLOUDY, CLOUD, SUN} from './../../../constants/weathers';
import './Style.css';

const Weatherdata = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;
    return (

        <div className='Weatherdata'>
            <Weathertemperature temperature={temperature} weatherState={weatherState} />
            <Weatherextrainfo humidity={humidity} wind={wind} />
        </div>);
};

Weatherdata.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default Weatherdata;