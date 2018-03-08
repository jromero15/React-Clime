import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN} from './../constants/weathers';

const stataToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY :
            return "cloudy";
        case SUN :
            return "day-sunday";
        case RAIN:
            return "rain";
    }
};

const getWeatherIcons = weatherState => {
    return (<WeatherIcons name={stataToIconName(weatherState)} size= "2x" />);
};

const Weathertemperature = ({temperature, weatherState}) => (
    <div>
       {getWeatherIcons(weatherState)}
        <span>32 C°</span>
        </div>
    
);

export default Weathertemperature;