import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tw-elements';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './contexts/ContextProvider';
import { ThemeProvider } from "@material-tailwind/react";
import { UserAuthContextProvider } from './contexts/UserAuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <UserAuthContextProvider>
      <ThemeProvider>
    <App />
    </ThemeProvider>
    </UserAuthContextProvider>
    </ContextProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
