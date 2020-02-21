import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchExchangeRate, addAmount, firstCurrency, secondCurrency } from '../actions';
import './ExchangeRateForm.scss'

export const ExchangeRateForm = props => {
    console.log("ExchangeRateForm props", props)
   
    const[currency, setCurrency] = useState({
        amount: '',
        firstCurrency: '',
        secondCurrency: ''
    });


    const movingElements = () => {
             let formPanel = document.getElementsByClassName("app-container");
             formPanel[0].style.justifyContent = "space-between";
             let footer = document.getElementById('footer');
             footer.style.position="relative";
         }

    const handleChange = e => {
        setCurrency({
            ...currency,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        // movingElements();
        props.fetchExchangeRate(currency.firstCurrency);
        props.addAmount(currency.amount);
        props.firstCurrency(currency.firstCurrency);
        props.secondCurrency(currency.secondCurrency);
        setCurrency({amount:'', firstCurrency:'', secondCurrency:''})
    }

    return (
        <form className="exchangeRateInputPanel" onSubmit={handleSubmit}>
            <h1>Exchange Rate Converter</h1>
            <div className="inputPanelDiv">
                <div className="eachInputPanelLabel">
                <label className="eachLabelText" htmlFor="amount">Amount</label>
                <input className="eachInputPanel" id="amount" name="amount" type="number" value={currency.amount} onChange={handleChange} placeholder="Amount" required/>
                </div>
                <div className="eachInputPanelLabel">
                <label className="eachLabelText" htmlFor="firstCurrency">From</label>
                <input className="eachInputPanel" id="firstCurrency" name="firstCurrency" type="text" value={currency.firstCurrency} onChange={handleChange} placeholder="From (USD)" required/>
                </div>
                <div className="eachInputPanelLabel">
                <label className="eachLabelText" htmlFor="secondCurrency">To</label>
                <input className="eachInputPanel" id="secondCurrency" name="secondCurrency" type="text" value={currency.secondCurrency} onChange={handleChange} placeholder="To (MXN)" required/>
                </div>
            </div>
            <button className="exchangeBtn">Exchange</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      amount: state.amount,
      firstCurrency: state.firstCurrency,
      secondCurrency: state.secondCurrency
    }
  }
  
  export default connect(mapStateToProps, {fetchExchangeRate, addAmount, firstCurrency, secondCurrency})(ExchangeRateForm);