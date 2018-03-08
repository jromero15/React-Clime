import React from 'react';
import Weathertemperature from './Weathertemperature';
import Weatherextrainfo from './Weatherextrainfo';
import { CLOUD, CLOUDY, SUN, RAIN } from '../constants/weathers';

const Weatherdata = () => (
    <div>
        <Weathertemperature temperature= {32} weatherState= {RAIN}/>
        <Weatherextrainfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default Weatherdata;