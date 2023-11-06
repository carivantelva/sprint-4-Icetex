import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const products = [
  {
    id: 1,
    name: 'Bluza',
    description: 'Bluza azul dama',
    price: 15000,
    image: './img/blusa.jpg'
  },
  {
    id: 2,
    name: 'Camisa cuadros',
    description: 'Camisa baquero dama',
    price: 10000,
    image: './img/camisa.jpg'
  },
  {
    id: 3,
    name: 'chaqueta',
    description: 'chaqueta cafe dama',
    price: 25000,
    image: './img/chaquetaCuero.jpg'
  },
  {
    id: 4,
    name: 'Chaqueta jean',
    description: 'chaqueta azul',
    price: 18000,
    image: './img/chaquetajean.jpg'
  },
  {
    id: 5,
    name: 'Falda Azuj',
    description: 'Falda en Jean',
    price: 8000,
    image: './img/falda.jpg'
  },
  {
    id: 6,
    name: 'Bolso',
    description: 'Bolso negro',
    price: 10000,
    image: './Img/bolso.jpg'
  },
  {
    id: 1,
    name: 'Jean',
    description: 'Pantalon azul',
    price: 20000,
    image: './Img/jean.jpg'
  },
  // Agrega más productos aquí
];

export const ProductsApp = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6">
              <div className="card mb-4">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
