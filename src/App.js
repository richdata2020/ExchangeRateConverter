import React from 'react';
import ExchangeRateTable from './components/ExchangeRateTable';
import ExchangeRateForm from './components/ExchangeRateForm';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <ExchangeRateForm />
      <ExchangeRateTable />
      <footer id="footer">Designed by Richard Wang 2020</footer>
    </div>
  );
}

export default App;
