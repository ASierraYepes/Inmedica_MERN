import React from 'react'

export default function ModalEditCita({selectedCita,ActualizarCita}) {

    return (
        <>
           <div className="modal fade" 
                id="exampleModaledit"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">Editar cita</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id ="updateForm" onSubmit={ActualizarCita}>
                                <div className="form-group">
                                    <label for="" className="form-label">id</label>
                                    <input type="text" className="form-control" name="id" defaultValue={selectedCita._id} readOnly/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Tipo de Documento</label>
                                    <select name="typeDoc" className="form-control">
                                    <option selected>Elija el Tipo de Documento</option>
                                        <option selected={selectedCita.typeDoc==="Cedula de Ciudadania"} value="Cedula de Ciudadania">Cedula ciudadania</option>
                                        <option selected={selectedCita.typeDoc==="Tarjeta de Identidad"} value="Tarjeta de Identidad">Tarjeta de identidad</option>
                                        <option selected={selectedCita.typeDoc==="Registro Civil"} value="Registro Civil">Registro civil</option>
                                        <option selected={selectedCita.typeDoc==="DNI(Pasaporte)"} alue="DNI(Pasaporte)">DNI(Pasaporte)</option>
                                        <option selected={selectedCita.typeDoc==="Cedula Extranjeria"} value="Cedula Extranjeria">Cedula extranjeria</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Documento</label>
                                    <input type="number" className="form-control" name="doc" defaultValue={selectedCita.doc} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Fecha</label>
                                    <input type="text" className="form-control" name="fecha" defaultValue={selectedCita.fecha} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Hora</label>
                                    <input type="text" className="form-control" name="hora" defaultValue={selectedCita.hora} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Codigo</label>
                                    <input type="text" className="form-control" name="codigo" defaultValue={selectedCita.codigo} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" form="updateForm">Actualizar</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}