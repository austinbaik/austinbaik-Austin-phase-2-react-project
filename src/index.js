import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
//provider - React Context API
//BrowserRouter 

import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    {/* <React.StrictMode > */}
      <App />
    {/* </React.StrictMode> */}
</HashRouter>
);

