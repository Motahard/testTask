import React from 'react';
import { render } from 'react-dom';
import DataState  from './context/dataState'
import App from './App';
import './index.css';

render(
  <React.StrictMode>
      <DataState>
          <App />
      </DataState>
  </React.StrictMode>,
  document.getElementById('root')
);
