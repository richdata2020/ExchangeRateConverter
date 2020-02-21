import React from 'react';
import './ExchangeRatePrimary.scss'

export const ExchangeRatePrimary = props => {
    console.log("ExchangeRatePrimary props", props)

    let rates = {};
    let result, secondCurrency, found = [];
    let foundResult = false;

    if (props.error !== "")
    {
        rates = props.rates; 
        result = Object.keys(rates).map(key =>{
            return [key, rates[key]];
        })
        secondCurrency = props.secondCurrency.toUpperCase();

        for (let i = 0; i < result.length; i++)
        {
            if (secondCurrency === result[i][0])
            {
                found = result[i];
                foundResult = true;
            }
        }
        console.log("ExchangeRatePrimary FOUND", found)
    }
   
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
                <h2>{props.amount} <span className="warningMessage">{props.firstCurrency.toUpperCase()}</span> = {(found[1] * props.amount).toFixed(6)} <span className="warningMessage">{found[0]}</span></h2>
                <h3>1 {props.firstCurrency.toUpperCase()} = {(found[1]).toFixed(6)} {found[0]}</h3>
                <h3>1 {found[0]} = {(1/(found[1])).toFixed(6)} {props.firstCurrency.toUpperCase()}</h3>
            </div>
            )}
        </div>
    )
}
