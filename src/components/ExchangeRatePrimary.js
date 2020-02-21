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
    let foundResult = false;
    for (let i = 0; i < result.length; i++)
    {
        if (secondCurrency === result[i][0])
        {
            found = result[i];
            foundResult = true;
        }
    }
    console.log("ExchangeRatePrimary FOUND", found)

    return(
       
        <div>
       
            {!foundResult && (
                <div className="primary">
                    <h3><span className="warningMessage">"To"</span> currency not found, please check and try again.</h3>
                    <h3>Below currency rates are based on <span className="warningMessage">"Amount"</span> and <span className="warningMessage">"From"</span></h3>
                </div>
            )}

            {foundResult && (
            <div className="primary">
                <h2>{props.amount} {props.firstCurrency.toUpperCase()} = {(found[1] * props.amount).toFixed(6)} {found[0]}</h2>
                <h3>1 {props.firstCurrency.toUpperCase()} = {(found[1]).toFixed(6)} {found[0]}</h3>
                <h3>1 {found[0]} = {(1/(found[1])).toFixed(6)} {props.firstCurrency.toUpperCase()}</h3>
            </div>
            )}
        </div>
    )
}
