import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Components/Footer'
import FormRegistro from './Components/FormRegistro'

export default function Registro() {
    return (
        <div style={{"background-image": "url(img/fondo.jpg)"}}>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                    <div className="container-fluid">
                        <Link to="/">
                            <a><img src="img/microscopio2.png" className="d-block  mx-auto" width="40" height="40" alt="img 1" />
                                <h6 className="text-light text-center font-weight-bold mb-0">INMEDICA</h6></a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/">
                                    <a class="nav-link active" data-bss-hover-animate="pulse">Inicio</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container col-md-12 col-lg-12 mx-auto"> 
                <div id ="registro" className="row p-3 mb-2 text-dark col-md-12 col-lg-6 mx-auto">
                    <div className="col-md-12 col-lg-6 mx-auto">
                        <FormRegistro/>
                    </div>  
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}