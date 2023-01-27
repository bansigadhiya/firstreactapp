import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import Header2 from './components/Header-2';
import Updatecom from './components/HOC';
import Gellary from './components/Gellary';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
import CounterFun from './components/CounterFun';
import WindowSize from './components/WindowSize';
import Tab from './components/Tab';
import ListKey from './components/ListKey';
import ManageForm from './components/ManageForm';
import Register from './components/Register';
import TodoApp from './components/Todo-app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Features from './pages/Feature/Features';
import Crud from './components/Crud/Crud';
// import Product from './components/Product/Product';
import ProductDetail from './components/Product/ProductDetail';
import AddEmployee from './components/Redirect-Crud-Form/AddEmployee';
import ViewEmpData from './components/Redirect-Crud-Form/ViewEmpData';
import Product from './pages/Products/Product';
import Product2 from './pages/Products/Product2';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const menuList = ["Blog","About","Contact",<i class="fa-solid fa-magnifying-glass"></i>]
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <Product/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        {/* <Route path="/" element={<Product/>}></Route> */}
        {/* <Route path="/productDetail" element={<ProductDetail />}></Route> */}
        <Route path="/AddEmployee" element={<AddEmployee/>}></Route>
        <Route path="/ViewEmpData" element={<ViewEmpData />}></Route>
        <Route path="/viewProduct" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>

      {/* <App /> */}

      {/* <Gellary /> */}
      {/* <Header logo="images/logo3.png" dropdown="Pages"/>

      <Header2 list={menuList}/> */}
      {/* <Updatecom /> */}
      {/* <Counter/> */}
      {/* <HoverCounter /> */}
      {/* <CounterFun/>
      <WindowSize /> */}
      {/* <Tab /> */}
      {/* <ListKey /> */}
      {/* <ManageForm /> */}
      {/* <Register/> */}
      {/* <TodoApp/> */}
      {/* <Crud /> */}
     

  </React.StrictMode>
);

reportWebVitals();
