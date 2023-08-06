import React from 'react'

export default function ModalEditResultado({selectedResultado,ActualizarResultado}) {

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
                            <h5 className="modal-title " id="exampleModalLabel">Editar Resultado</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id ="updateForm" onSubmit={ActualizarResultado}>
                                <div className="form-group ">
                                    <label for="" className="form-label">Tipo de Documento</label>
                                    <select name="typeDoc" className="form-control">
                                        <option selected={selectedResultado.typeDoc==="Cedula de Ciudadania"} value="Cedula de Ciudadania">Cedula Ciudadania</option>
                                        <option selected={selectedResultado.typeDoc==="Tarjeta de Identidad"} value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                        <option selected={selectedResultado.typeDoc==="Registro Civil"} value="Registro Civil">Registro Civil</option>
                                        <option selected={selectedResultado.typeDoc==="DNI(Pasaporte)"} value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                                        <option selected={selectedResultado.typeDoc==="Cedula Extranjeria"} value="Cedula Extranjeria">Cedula Extranjeria</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">id</label>
                                    <input type="text" className="form-control" name="id" defaultValue={selectedResultado._id} readOnly/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Documento</label>
                                    <input type="number" className="form-control" name="doc" defaultValue={selectedResultado.doc} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Codigo Examen</label>
                                    <input type="text" className="form-control" name="codigo" defaultValue={selectedResultado.codigo} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Resultado de Exámen</label>
                                    <input type="text" className="form-control" name="resultado" defaultValue={selectedResultado.resultado} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-primary" onClick={""}>Consultar</button> */}
                            <button type="submit" className="btn btn-primary" form="updateForm">Actualizar</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}