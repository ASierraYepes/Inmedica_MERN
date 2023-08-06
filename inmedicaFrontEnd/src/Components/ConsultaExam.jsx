import React from 'react'

export default function ConcultaExam() {
    return (
        <>
            <div>
                <div className="row mb-2 text-dark">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <label for="" className="form-label">Tipo de documento</label>
                                <select className="form-control" name="tipo">
                                    <option selected>Elija el tipo de documento</option>
                                    <option value="1">Cedula ciudadania</option>
                                    <option value="2">Tarjeta de identidad</option>
                                    <option value="3">Registro civil</option>
                                    <option value="4">Pasaporte</option>
                                    <option value="5">Extranjeria</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">No. documento</label>
                                <input type="number" className="form-control" id="doc" placeholder="# Documento" />
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary" type="button" >Buscar paciente</button>
                            </div><br />
                        </form>
                        <div className="col-md-13">
                            <form>
                                <div className="form-group">
                                    <label for="" className="form-label">Nombre completo</label>
                                    <input type="text" className="form-control" id="nom" placeholder="Nombre Completo" readonly />
                                </div>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-primary" type="button" >Buscar examen</button>
                                </div><br /><br />
                            </form>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}