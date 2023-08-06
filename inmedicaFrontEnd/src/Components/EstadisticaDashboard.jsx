import React from 'react'

export default function EstadisticaDashboard() {
    return (
        <>
            <section className="bg-mix py-3">
                <div className="container">
                    <div className="card rounded-1">
                        <div className="card-body">
                            <div className="row"  id="TituloDash">
                                <div className="col-lg-3 col-md-6 d-flex my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Resultados entregados hoy</h6>
                                        <h3 id="Estadistica" className="font-weight-bold">120</h3>
                                        <h6 className="text-success"><i className="icon ion-md-arrow-dropup-circle"></i> 15.50%</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Exámenes pendientes</h6>
                                        <h3 id="Estadistica" className="font-weight-bold">130</h3>
                                        <h6 className="text-success"><i className="icon ion-md-arrow-dropup-circle"></i> 25.50%</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Exámenes activos</h6>
                                        <h3 id="Estadistica" className="font-weight-bold">850</h3>
                                        <h6 className="text-success"><i className="icon ion-md-arrow-dropup-circle"></i> 50.50%</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">No. de pacientes</h6>
                                        <h3 id="Estadistica" className="font-weight-bold">1000</h3>
                                        <h6 className="text-success"><i className="icon ion-md-arrow-dropup-circle"></i> 75.50%</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}