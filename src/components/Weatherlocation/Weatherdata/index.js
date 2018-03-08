import React from 'react';
import Weathertemperature from './Weathertemperature';
import Weatherextrainfo from './Weatherextrainfo';
import { CLOUD} from './../../../constants/weathers';
import 'Style.css';

const Weatherdata = () => (
    <div clas name='prueba'>
        <Weathertemperature temperature= {32} weatherState= {CLOUD}/>
        <Weatherextrainfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default Weatherdata;