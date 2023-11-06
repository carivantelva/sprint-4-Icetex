


import "./cart.css";
//import { useState } from "react";

function Producto(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start" >
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.name}</div>
        {props.description}
      </div>
      <span class="badge bg-primary rounded-pill">{props.price}</span>
    </li>
  );
}

export default function Cart(props) {

  let total = 0;

  function pay(){
    let venta ={
      products:props.selectedItems,
      total:total,
    };

    fetch ("/pay", {
      headers:{
        "Content-type":"Aplication/json",
      },
      method:"POST",
      body:JSON.stringify(venta),
    })
  }

  return (
    <div className="col-4 mh-100 " id="cart">
      <h2 className="d-flex justify-content-center">carrito compras</h2>
      <ol class="list-group list-group-numbered" id="list">

        {
          props.selectedItems.map((item) => {
            total += item.price;
            return <Producto name={item.name} description={item.description} price={item.price}></Producto>
          })
        }

        {/*<Producto name="blusa" description="mujer" price={10000}></Producto>*/}

      </ol>

      <div className="d-flex justify-content-evenly col-12 mt-4 mb-5">
        <button type="button" className="btn btn-outline-dark">
          Total: {total}
        </button>

        <button tipe="button" class="btn btn-success" onClick={pay}>Pagar carrito</button>
      </div>

      
    </div>

  );
};