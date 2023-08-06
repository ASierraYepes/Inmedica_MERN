import React from 'react'
import DataTableUser from './Components/DataTableUser'
import Footer from './Components/Footer'
import NavbarDashboard from './Components/NavbarDashboard'
import NavUpDashboard from './Components/NavUpDashboard'

export default function Usuarios() {
    return (
        <div id="body-dashboard">
            <div className="d-flex" id="content-wrapper">
                <NavbarDashboard/>
                <div className="w-100">
                    <NavUpDashboard/>
                    <div id="Contenido" className="bg-grey w-100">
                        <section className="bg-light py-3">
                            <div className="">
                                <div className="row" id="TituloDash">
                                    <div className="col-lg-9 col-md-8">
                                        <h1 className="font-weight-bold mb-0">Usuarios</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div>
                            <DataTableUser/>     
                        </div>                                 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
} 