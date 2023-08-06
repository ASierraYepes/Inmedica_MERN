import React from 'react'

export default function ModalAddExamen(leerExamenes) {
    const host="http://localhost:9000/examen";
    function guardar_e(){
        const codigo = document.getElementById("cod").value;
        const descripcion = document.getElementById("descripcion").value;
        fetch(`${host}/grabar_e`,{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({codigo, descripcion})
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
                  Agregar exámen
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
                      codigo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cod"
                      placeholder="codigo del exámen"
                    />
                  </div>
                  <div className="form-group">
                    <label for="" className="form-label">
                      Descripción del exámen
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="descripcion"
                      placeholder="Descripcion del exámen"
                    />
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
                <button type="button" className="btn btn-primary" onClick={guardar_e}>
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}