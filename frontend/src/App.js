
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { Footer } from './components/footer';
import { Header } from './components/header';
import Nav from './components/nav';
import { ProductsApp } from './components/productsApp';
//import Products from './components/products';




const App = () => {
  return (
    <Fragment>

      <Header />
      <Nav/>
      {/*<Products Products/>   */}  
      <ProductsApp/>

      <Footer />




    </Fragment>
  );
};
export default App;
