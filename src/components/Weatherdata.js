import React from 'react';
import Weathertemperature from './Weathertemperature';
import Weatherextrainfo from './Weatherextrainfo';

const Weatherdata = () => (
    <div>
        <Weathertemperature temperature= {32} weatherState= {'rain'}/>
        <Weatherextrainfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default Weatherdata;