import React from 'react'

export default function ModalEditExamen({selectedExamen,ActualizarExamen}) {

    return (
        <>
           <div className="modal fade" 
                id="Modaleditexam"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">Editar Examen</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id ="actualizarForm" onSubmit={ActualizarExamen}>
                                <div className="form-group">
                                    <label for="" className="form-label">id</label>
                                    <input type="text" className="form-control" name="id" defaultValue={selectedExamen._id} readOnly/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Codigo</label>
                                    <input type="text" className="form-control" name="codigo" defaultValue={selectedExamen.codigo} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Descripcion</label>
                                    <input type="text" className="form-control" name="descripcion" defaultValue={selectedExamen.descripcion} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" form="actualizarForm">Actualizar</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}