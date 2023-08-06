import React from 'react'

export default function ResultadoExamen() {
    const host="http://localhost:9000/resultadoexamen";
    function grabar_r(){
        const typeDoc = document.getElementById("typeDoc").value;
        const doc = document.getElementById("doc").value;
        const codigo = document.getElementById("codigo").value;
        const resultado = document.getElementById("resultado").value;
        fetch(`${host}/grabar_r`,{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({typeDoc, doc, codigo, resultado})
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
                            <div className="form-group ">
                                <label for="" className="form-label">Tipo de documento</label>
                                <select id="typeDoc" className="form-control">
                                <option selected>Elija el tipo de documento</option>
                                    <option value="Cedula de Ciudadania">Cedula ciudadania</option>
                                    <option value="Tarjeta de Identidad">Tarjeta de identidad</option>
                                    <option value="Registro Civil">Registro civil</option>
                                    <option value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                                    <option value="Cedula Extranjeria">Cedula extranjeria</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Documento</label>
                                <input type="number" className="form-control" id="doc" placeholder="N. Documento" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Codigo</label>
                                <input type="text" className="form-control" id="codigo" placeholder="Codigo de exámen" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Resultado</label>
                                <textarea type="text" className="form-control" id="resultado" placeholder="Resultados y comentarios del exámen..." />
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary btn-block" type="button" onClick={grabar_r}>Agregar resultado</button>
                            </div><br />   <br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}