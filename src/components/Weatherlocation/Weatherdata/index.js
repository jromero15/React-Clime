import React from 'react';
import Weathertemperature from './Weathertemperature';
import Weatherextrainfo from './Weatherextrainfo';
import { RAIN, CLOUDY, CLOUD, SUN} from './../../../constants/weathers';
import './Style.css';

const Weatherdata = () => (
    <div className='Weatherdata'>
        <Weathertemperature temperature= {32} weatherState= {RAIN}/>
        <Weatherextrainfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default Weatherdata;