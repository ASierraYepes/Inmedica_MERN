import React from 'react'

export default function ExamsDashboard() {
    return (
        <>
            <div className="card-header bg-light">
                <h6 className="font-weight-bold mb-0">Exámenes de laboratorio</h6>
            </div>
            <div className="card-body pt-2">
                <div className="d-flex border-bottom py-2">
                    <div className="d-flex mr-3">
                        <h2 className="align-self-center mb-0"><i className="icon ion-md-pricetag"></i></h2>
                    </div>
                    <div className="align-self-center">
                        <h6 className="d-inline-block mb-0">Hemograma</h6><span className="badge badge-success ml-2">Disponible</span>
                    </div>
                </div>
                <div className="d-flex border-bottom py-2">
                    <div className="d-flex mr-3">
                        <h2 className="align-self-center mb-0"><i className="icon ion-md-pricetag"></i></h2>
                    </div>
                    <div className="align-self-center">
                        <h6 className="d-inline-block mb-0">Urianálisis</h6><span className="badge badge-success ml-2">Disponible</span>
                    </div>
                </div>
                <div className="d-flex border-bottom py-2">
                    <div className="d-flex mr-3">
                        <h2 className="align-self-center mb-0"><i className="icon ion-md-pricetag"></i></h2>
                    </div>
                    <div className="align-self-center">
                        <h6 className="d-inline-block mb-0">Heces por parásito</h6><span className="badge badge-warning ml-2">No disponible</span>
                    </div>
                </div>
                <div className="d-flex border-bottom py-2">
                    <div className="d-flex mr-3">
                        <h2 className="align-self-center mb-0"><i className="icon ion-md-pricetag"></i></h2>
                    </div>
                    <div className="align-self-center">
                        <h6 className="d-inline-block mb-0">Perfil renal</h6><span className="badge badge-success ml-2">Disponible</span>
                    </div>
                </div>
                <div className="d-flex border-bottom py-2 mb-3">
                    <div className="d-flex mr-3">
                        <h2 className="align-self-center mb-0"><i className="icon ion-md-pricetag"></i></h2>
                    </div>
                    <div className="align-self-center">
                        <h6 className="d-inline-block mb-0">Perfil lipídico</h6><span className="badge badge-success ml-2">Disponible</span>
                    </div>
                </div>
                <button className="btn btn-primary w-100">Ver todas</button>
            </div>
        </>
    )
}