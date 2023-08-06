import React from 'react'


export default function HorariosExamenes() {
    const host="http://localhost:9000/agenda";
    function grabar_a(){
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const estado = document.getElementById("estado").value;
        fetch(`${host}/grabar_a`,{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({fecha, hora, estado})
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
                                <label for="" className="form-label">Fecha</label>
                                <input type="text" className="form-control" id="fecha" placeholder="Fecha" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Hora</label>
                                <input type="text" className="form-control" id="hora" placeholder="Hora de exámen" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Estado</label>
                                <select className="form-control" id="estado">
                                    <option selected>Seleccione el tipo de estado</option>
                                    <option value={1}>Disponible</option>
                                    <option value={2}>No disponible</option>
            
                                </select>
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary btn-block" type="button" onClick={grabar_a}>Agregar horario</button>
                            </div><br/><br/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}