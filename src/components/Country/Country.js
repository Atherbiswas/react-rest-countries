import React from 'react';
import './Country.css'

const country = (props) => {
    const {name, area, population, region, flags} = props.country; 
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default country;