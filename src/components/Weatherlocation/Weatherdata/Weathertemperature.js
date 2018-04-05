import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './Style.css';

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
    }
};

const getWeatherIcons = weatherState => {
    return (<WeatherIcons className='wicon' name={stataToIconName(weatherState)} size= "4x" />);
};

const Weathertemperature = ({temperature, weatherState}) => (
    <div className= 'Weathertemperature'>
       {getWeatherIcons(weatherState)}
        <span className='temperature'>{temperature} C°</span>
        <span classname="temperaturetype">
    </div>
    
);

Weathertemperature.prototype = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
    
}

export default Weathertemperature;