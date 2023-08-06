import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarDashboard() {
    return (
        <>
            <div id="sidebar-container" className="bg-primary">
                <div className="logo">
                    <a href="#"><img src="img/microscopio2.png" className="d-block  mx-auto" width="90" height="90" alt="img 1"/>
                        <h4 className ="text-light text-center font-weight-bold mb-0">INMEDICA</h4></a>
                </div>
                <div className="menu">
                    <Link to="/Dashboard">
                    <a className="d-block text-light p-3 border-0"><i className="icon ion-ios-speedometer lead mr-2"></i>Dashboard</a>
                    </Link>
                    <Link to="/Agenda">
                    <a href="#" className="d-block text-light p-3 border-0"><i className="icon ion-ios-today lead mr-2"></i>Agenda</a>
                    </Link>
                    <Link to="/Examenes">
                    <a href="#" className="d-block text-light p-3 border-0"><i className="icon ion-ios-eye lead mr-2"></i>Exámenes</a>
                    </Link>
                    <Link to="/Resultados">
                    <a href="#" className="d-block text-light p-3 border-0"><i className="icon ion-md-done-all lead mr-2"></i>Resultados</a>
                    </Link>
                    <Link to="/Usuarios">
                        <a className="d-block text-light p-3 border-0"><i className="icon ion-md-person  lead mr-2"></i>Usuarios</a>
                    </Link>
                    
                </div>
            </div>
        </> 
    )
}