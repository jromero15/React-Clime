import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, HAIL, RAIN} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './Style.css';

const stataToIconName = weatherState => {
    switch (weatherState) {      
    case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case HAIL:
            return "hail";
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
        <span className='temperature'>{temperature}</span>
        <span className="temperaturetype">C°</span>
    </div>
    
);

Weathertemperature.prototype = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,

}

export default Weathertemperature;