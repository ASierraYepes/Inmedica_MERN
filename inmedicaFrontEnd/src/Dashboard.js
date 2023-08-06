import React from 'react'
import EstadisticaDashboard from './Components/EstadisticaDashboard'
import ExamsDashboard from './Components/ExamsDashboard'
import Footer from './Components/Footer'
import GraficoDashboard from './Components/GraficoDashboard'
import NavbarDashboard from './Components/NavbarDashboard'
import NavUpDashboard from './Components/NavUpDashboard'

export default function Dashboard() {
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
                                        <h1 className="font-weight-bold mb-0">Dashboard</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <EstadisticaDashboard/>
                        <section>
                            <div className="container">
                                <div className="row" id="GraficoDash">
                                    <div className="col-lg-7 my-3">
                                        <div className="card rounded-1">
                                            <div className="card-header bg-light">
                                                <h6 className="font-weight-bold mb-0">Promedio entregas de resultados anual 2020</h6>
                                            </div>
                                            <GraficoDashboard/>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 my-3">
                                        <div className="card rounded-1">
                                            <ExamsDashboard/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
} 