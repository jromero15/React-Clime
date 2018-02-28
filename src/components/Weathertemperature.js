import React from 'react';
import WeatherIcons from 'react-weathericons';

const stataToIconName = weatherState => {
    switch (weatherState){
        case "cloud":
            return "cloud";
        case "cloudy":
            return "cloudy";
        case "sun":
            return "day-sunday";
        case "rain":
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