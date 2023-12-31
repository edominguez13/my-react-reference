import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* React's Strict mode helps developers identify and fix issues in their code. 
  Strict mode runs in development mode and can be enabled by adding a component at 
  the beginning of the application. It checks for potential problems in the code, 
  such as possible memory leaks, and warns the user about their presence. */}
    <BrowserRouter>
    {/* BrowserRouter handles the routing of the app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
