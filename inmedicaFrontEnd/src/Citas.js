import React from 'react'
import AgendaCita from './Components/AgendaCita'
// import ConcultaExam from './Components/ConsultaExam'
// import AgendaExamTable from './Components/ExamPacienteTable'
import Footer from './Components/Footer'
import NavbarDashboard from './Components/NavbarDashboard'
import NavUpDashboard from './Components/NavUpDashboard'
import TablaCitas from './Components/TablaCitas'
import Tablaexamenes from './Components/TablaExamenes'

export default function Citas() {
    return (
      <>
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
                                    <h1 className="font-weight-bold mb-0">Exámenes</h1>
                                </div>
                            </div>
                        </div>
                    </section>       
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Agendar cita</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Citas agendados</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Exámenes</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <section>
                                <div className="container">
                                    <div className="row" id="GraficoDash">
                                        <div className="col-md-10 my-3 mx-auto">
                                            <br/>
                                            <div className="card rounded-1">
                                                <div className="card-header bg-light">
                                                    <h6 className="font-weight-bold mb-0">Agendar cita</h6>
                                                </div>
                                                <AgendaCita />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <section>
                                <div className="container">
                                    <div className="row" id="GraficoDash">
                                        <div className="col-lg-12 my-3 mx-auto">
                                        <br/>
                                            <div className="card rounded-1">
                                                <div className="card-header bg-light">
                                                    <h6 className="font-weight-bold mb-0">Exámenes agendados</h6>
                                                </div>
                                                <TablaCitas/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <section>
                                <div className="container">
                                    <div className="row" id="GraficoDash">
                                        <div className="col-lg-12 my-3 mx-auto">
                                        <br/>
                                            <div className="card rounded-1">
                                                <div className="card-header bg-light">
                                                    <h6 className="font-weight-bold mb-0">Exámenes</h6>
                                                </div>
                                                <Tablaexamenes/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                        </div>
                    </div>
 
                </div>

              {/* <div id="Contenido" className="bg-grey w-100">
                <section className="bg-light py-3">
                  <div className="">
                    <div className="row" id="TituloDash">
                      <div className="col-lg-9 col-md-8">
                        <h1 className="font-weight-bold mb-0">
                          Exámenes por pacientes
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="container">
                    <div className="row" id="GraficoDash">
                      <div className="col-lg-5 my-3">
                        <div className="card rounded-1">
                          <div className="card-header bg-light">
                            <h6 className="font-weight-bold mb-0">
                              Conculta cita de exámenes
                            </h6>
                          </div>
                          <ConcultaExam />
                        </div>
                      </div>
                      <div className="col-lg-7 my-3">
                        <div className="card rounded-1">
                          <div className="card-header bg-light">
                            <h6 className="font-weight-bold mb-0">
                              Exámenes Pendientes
                            </h6>
                          </div>
                          <AgendaExamTable />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div> */}
                </div>
            </div>
          <Footer />
        </div>
      </>
    );
}