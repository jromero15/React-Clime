import React, { Component } from 'react';
import Location from './Location';
import Weatherdata from './Weatherdata';
import { RAIN, CLOUDY, CLOUD, HAIL } from './../../constants/weathers';
import './style.css';

const data = {
    temperature: 20,
    weatherState: HAIL,
    humidity: 10,
    wind: '10 m/s',
};

class Weatherlocation extends Component { 
    render = () => (
    <div className="Nombrelocacion">
        <Location city={"¡Bogota D.C!"} />
        <Weatherdata data={data} />
    </div>
);
}


export default Weatherlocation;
