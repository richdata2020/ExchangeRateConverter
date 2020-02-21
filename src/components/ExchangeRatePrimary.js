import React from 'react';
import './ExchangeRatePrimary.scss'

export const ExchangeRatePrimary = props => {
    console.log("ExchangeRatePrimary props", props)

    let rates = props.rates; 

    let result = Object.keys(rates).map(key =>{
        return [key, rates[key]];
    })

    let secondCurrency = props.secondCurrency.toUpperCase();
   
    let found = [];
    for (let i = 0; i < result.length; i++)
    {
        if (secondCurrency === result[i][0])
        {
            found = result[i];
        }
    }
    console.log("ExchangeRatePrimary FOUND", found)

    return(
        <div className="primary">
            <h2>{props.amount} {props.firstCurrency.toUpperCase()} = {(found[1] * props.amount).toFixed(6)} {found[0]}</h2>
            <h3>1 {props.firstCurrency.toUpperCase()} = {(found[1]).toFixed(6)} {found[0]}</h3>
            <h3>1 {found[0]} = {(1/(found[1])).toFixed(6)} {props.firstCurrency.toUpperCase()}</h3>
        </div>
    )
}
