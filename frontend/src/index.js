import React from 'react';
import ReactDOM from 'react-dom/client';
import './routes/login.css';
import App from "./App";
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './routes/Login';
import Nav from './components/nav';
import Products from './components/products';
import Home from './routes/home';
import Footer from './components/footer';
import Logup from './routes/Logup';
import { ProductsApp } from './components/productsApp';



//renderizacion

 ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path="app"Component={App}> </Route>
    <Route path="login"Component={Login}> </Route>
    <Route path="Nav"Component={Nav}> </Route>
    <Route path="Products"Component={Products}> </Route>
    <Route path="Home"Component={Home}> </Route>
    <Route path="Footer"Component={Footer}> </Route>
    <Route path="Logup"Component={Logup}> </Route>

    <Route path="ProductsApp"Component={ProductsApp}> </Route>
    

    


   

    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

