import React from 'react'

export default function ModalEditAgenda({selectedHorario,ActualizarHorario}) {

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
                            <h5 className="modal-title " id="exampleModalLabel">Editar horario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id ="updateForm" onSubmit={ActualizarHorario}>
                                <div className="form-group">
                                    <label for="" className="form-label">id</label>
                                    <input type="text" className="form-control" name="id" defaultValue={selectedHorario._id} readOnly/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Fecha</label>
                                    <input type="text" className="form-control" name="fecha" defaultValue={selectedHorario.fecha} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Hora</label>
                                    <input type="text" className="form-control" name="hora" defaultValue={selectedHorario.hora} />
                                </div>
                                <div className="form-group ">
                                    <label for="" className="form-label">Estado</label>
                                    <select name="estado" className="form-control">
                                        <option selected={selectedHorario.estado==="Disponible"} value={1}>Disponible</option>
                                        <option selected={selectedHorario.estado==="No disponible"} value={2}>No disponible</option>
                                    </select>
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