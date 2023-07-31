import React, { useEffect, useState } from 'react'
import { Country } from './Country';
import './Countries.css'
export const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
  
    return (
      <div >
        <h1>Visiting Every Country</h1>
        <h3>Countries {countries.length}</h3>
        {/* {
            countries.map(country => console.log(country))
        } */}
        <div className='countries-container'>

        {countries.map(country => (
          <Country
            key={country.name.common}
            country={country}
          ></Country>
          
        ))}
        </div>
      </div>
    );
  };
