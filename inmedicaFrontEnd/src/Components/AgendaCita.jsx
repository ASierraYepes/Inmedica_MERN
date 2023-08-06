import React from 'react'


export default function AgendaCita() {
    const host="http://localhost:9000/citaexamen";
    function grabar_ce(){
        const typeDoc = document.getElementById("typeDoc").value;
        const doc = document.getElementById("doc").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const codigo = document.getElementById("codigo").value;
        fetch(`${host}/grabar_ce`,{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({typeDoc, doc, fecha, hora, codigo})
             })
        .then(dato=>dato.json())
        .then(dato=>alert(dato.msg))
        .catch(error=>alert(error));
    };
    return (
        <>
            <div>
                <div className="row mb-2 text-dark">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                            <label for="" className="form-label">Tipo de Documento</label>
                            <select id="typeDoc" className="form-control">
                            <option selected>Elija el Tipo de documento</option>
                                <option value="Cedula de Ciudadania">Cedula ciudadania</option>
                                <option value="Tarjeta de Identidad">Tarjeta de identidad</option>
                                <option value="Registro Civil">Registro civil</option>
                                <option value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                                <option value="Cedula Extranjeria">Cedula extranjeria</option>
                            </select>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">No. documento</label>
                                <input type="number" className="form-control" id="doc" placeholder="No. Documento" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Fecha</label>
                                <input type="text" className="form-control" id="fecha" placeholder="Fecha" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Hora</label>
                                <input type="text" className="form-control" id="hora" placeholder="Hora de exámen" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Codigo</label>
                                <input type="text" className="form-control" id="codigo" placeholder="Código de exámen" />
                            </div>
                            <div className="d-grid gap-2 d-md-block text-center">
                                <button className="btn btn-primary btn-block" type="button" onClick={grabar_ce}>Agregar cita</button>
                            </div><br />   <br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}