import React, { Fragment } from 'react'
//import { Link } from 'react-router-dom'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.css';



export const Header = () => {

    return (
        <Fragment>
            <>
                <header>
                    <h1>Tienda de Ropa Usada Online</h1>
                    <h2>El Ropero de Lily </h2>

                    {/*<Link to="/Footer">  Ir a Footer</Link>*/}

                </header>
            </>
        </Fragment>
    )

}
