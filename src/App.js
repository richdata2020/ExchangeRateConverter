import React from 'react';
import ExchangeRateTable from './components/ExchangeRateTable';
import ExchangeRateForm from './components/ExchangeRateForm';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <ExchangeRateForm />
      <ExchangeRateTable />
      <footer id="footer">For test purposes only - MHS v1.6 2022</footer>
    </div>
  );
}

export default App;
