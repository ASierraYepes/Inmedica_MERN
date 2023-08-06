import React from 'react'

export default function ModalAdd(leerUsuarios) {
    const host="http://localhost:9000/crudDash/";
    function agregar(){
        const typeDoc = document.getElementById("typeDoc").value;
        const doc = document.getElementById("doc").value;
        const nom = document.getElementById("nom").value;
        const mail = document.getElementById("mail").value;
        const password = document.getElementById("password").value;
        const tel = document.getElementById("tel").value;
        const dir = document.getElementById("dir").value;
        const datetime = document.getElementById("datetime").value;
        const rol = document.getElementById("rol").value;
        fetch(`${host}/agregar`,{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({typeDoc, doc, nom, mail, password, tel, dir, datetime, rol})
             })
        .then(dato=>dato.json())
        .then(dato=>alert(dato.msg))
        .catch(error=>alert(error));
    };
    return (
      <>
        <div
          className="modal fade"
          id="exampleModaladd"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title " id="exampleModalLabel">
                  Agregar usuario
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form >
                  <div className="form-group">
                    <label for="" className="form-label">
                      No. Documento
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="doc"
                      placeholder="N° Documento"
                    />
                  </div>
                  <div className="form-group ">
                    <label for="" className="form-label">
                      Tipo de Documento
                    </label>
                    <select id="typeDoc" className="form-control">
                      <option selected>Elija el Tipo de Documento</option>
                      <option value="Cedula de Ciudadania">
                        Cedula Ciudadania
                      </option>
                      <option value="Tarjeta de Identidad">
                        Tarjeta de Identidad
                      </option>
                      <option value="Registro Civil">Registro Civil</option>
                      <option value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                      <option value="Cedula Extranjeria">
                        Cedula Extranjeria
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="" className="form-label">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      placeholder="Nombre Completo"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" className="form-label">
                      Correo
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="mail"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" className="form-label">
                      Telefono
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="tel"
                      placeholder="# Telefono"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" className="form-label">
                      Direccion Residencia
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dir"
                      placeholder="Direccion Residencia"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" className="form-label">
                      Fecha Nacimiento
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="datetime"
                      placeholder="yyyy-mm-dd"
                    />
                  </div>
                  <div className="form-group ">
                    <label for="" className="form-label">
                      Tipo de Documento
                    </label>
                    <select id="rol" className="form-control">
                      <option selected>Elija el Rol</option>
                      <option value="Administrador">
                        Administrador
                      </option>
                      <option value="Paciente">
                        Paciente
                      </option>
                      <option value="Usuario Interno">Usuario Interno</option>
                      </select>
                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary" onClick={agregar}>
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}