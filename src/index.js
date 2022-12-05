import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
// import Header from './components/Header'
// import Gellary from './componnts/gellary'
// import Header2 from './components/Header-2'
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const menuList = ["Blog","About","Contact",<i class="fa-solid fa-magnifying-glass"></i>]
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Gellary /> */}
    {/* <Header logo="images/logo3.png" dropdown="Pages"/> */}

    {/* <Header2 list={menuList}/> */}
    <Counter/>

  </React.StrictMode>
);

reportWebVitals();
