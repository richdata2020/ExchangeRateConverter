import axios from 'axios';

export const fetchExchangeRate = currency =>{
    return dispatch => {
        dispatch({type: 'FETCH_EXCHANGE_RATE'})
        axios.get(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then(res => {
            console.log(res) // res.data => exchange rate datas
            dispatch({type: 'FETCH_DATA_SUCCESS', payload: res.data})

        })
        .catch(err => {
            console.log(err)
            alert('Currency not recognize, please check and try again.')
            dispatch({type: 'FETCH_DATA_FAILED', payload: err.message})
        })
    }
}

export const addAmount = amount =>{
    console.log("action amount", amount)
    return {
        type: 'ADD_AMOUNT',
        payload: amount
    }
}

export const firstCurrency = currencyName => {
    return {
        type: 'FIRST_CURRENCY',
        payload: currencyName
    }
}

export const secondCurrency = currencyName => {
    return {
        type: 'SECOND_CURRENCY',
        payload: currencyName
    }
}