import React from 'react'

export const Country = props => {
    // console.log(props.country)
    const {population,name} = props.country;
    return (
        
      <div className='card'>
        <h2>Name: {name.common}</h2>
        <p>Population: {population}</p>
      </div>
    );
  };

  
