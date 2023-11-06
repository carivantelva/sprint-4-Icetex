
//import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css'

function Nav() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <a className="nav-link" href="/">Ropero Lily</a>

          </div>
          <div>
            <a className="nav-link" href="../App">Inicio  </a>

          </div>

          <div><a className="nav-link" href="/prendas">Prendas</a></div>
          <form className="d-flex">

            <input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Búsqueda" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          <div>
            <a className="nav-link"  href="/login">Inicio Sesión</a>
          </div>
        </div>
      </nav>
        
    );
}

export default Nav;
