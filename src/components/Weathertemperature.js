import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN} from './../constants/weathers';
import PropTypes from 'prop-types';

const stataToIconName = weatherState => {
    switch (weatherState) {      
    case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunday";
        case RAIN:
            return "rain";
        default:
            return "day-sunday";
    }
};

const getWeatherIcons = weatherState => {
    return (<WeatherIcons name={stataToIconName(weatherState)} size= "2x" />);
};

const Weathertemperature = ({temperature, weatherState}) => (
    <div>
       {getWeatherIcons(weatherState)}
        <span>{temperature} C°</span>
    </div>
    
);

Weathertemperature.prototype = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
    
}

export default Weathertemperature;