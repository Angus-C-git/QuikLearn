import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <h1>Place Holder</h1> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log)
