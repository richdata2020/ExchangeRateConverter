import React from 'react';
import './Rate.scss';

export const Rates = props =>{
    console.log("Rates props", props);
    let rates = props.rates; 

    let result = Object.keys(rates).map(key =>{
        return [key, rates[key]];
    })
    console.log("Rates result", result);
    
    return(
        <div className="rateCards">
            {result.map(rates =>{
                return (
                <div className="rates" key={rates[0]}>{rates[0]}: {(rates[1] * props.amount).toFixed(6)}</div>
            )})}
        </div>
    )
}