import React from 'react'

export default function ModalEdit({selectedUser,handleSubmit}) {

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
                            <h5 className="modal-title " id="exampleModalLabel">Editar usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id ="updateForm" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="" className="form-label">Consultar No. Documento</label>
                                    <input type="number" className="form-control" name="doc" defaultValue={selectedUser.doc} />
                                </div>
                                <div className="form-group ">
                                    <label for="" className="form-label">Tipo de Documento</label>
                                    <select name="typeDoc" className="form-control">
                                        <option selected={selectedUser.typeDoc==="Cedula de Ciudadania"} value="Cedula de Ciudadania">Cedula Ciudadania</option>
                                        <option selected={selectedUser.typeDoc==="Tarjeta de Identidad"} value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                        <option selected={selectedUser.typeDoc==="Registro Civil"} value="Registro Civil">Registro Civil</option>
                                        <option selected={selectedUser.typeDoc==="DNI(Pasaporte)"} value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                                        <option selected={selectedUser.typeDoc==="Cedula Extranjeria"} value="Cedula Extranjeria">Cedula Extranjeria</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" name="nom" defaultValue={selectedUser.nom}/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Correo</label>
                                    <input type="email" className="form-control" name="mail"  defaultValue={selectedUser.mail}/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Telefono</label>
                                    <input type="number" className="form-control" name="tel" defaultValue={selectedUser.tel} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Direccion Residencia</label>
                                    <input type="text" className="form-control" name="dir" defaultValue={selectedUser.dir} />
                                </div>
                                <div className="form-group">
                                    <label for="" className="form-label">Fecha Nacimiento</label>
                                    <input type="date" className="form-control" name="datetime" defaultValue={selectedUser.datetime} />
                                </div>
                                <div className="form-group ">
                                    <label for="" className="form-label">Rol</label>
                                    <select name="rol" className="form-control">
                                        <option selected={selectedUser.rol==="Administrador"} value="Administrador">Administrador</option>
                                        <option selected={selectedUser.rol==="Paciente"} value="Paciente">Paciente</option>
                                        <option selected={selectedUser.rol==="Usuario Interno"} value="Usuario Interno">Usuario Interno</option>
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