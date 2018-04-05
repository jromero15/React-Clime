import React from 'react';
import Location from './Location';
import Weatherdata from './Weatherdata';
import './style.css';


const Weatherlocation = () => (
    <div className="Nombrelocacion">
    <Location city={"Bogota D.C"}/>
    <Weatherdata />

    </div>
);


export default Weatherlocation;
