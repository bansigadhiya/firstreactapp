import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
// import Header from './components/Header'
// import Gellary from './componnts/gellary'
import Header2 from './components/Header-2'

const root = ReactDOM.createRoot(document.getElementById('root'));
const menuList = ["Blog","About","Contact",<i class="fa-solid fa-magnifying-glass"></i>]
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Gellary /> */}
    {/* <Header logo="images/logo3.png" dropdown="Pages"/> */}

    <Header2 list={menuList}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
