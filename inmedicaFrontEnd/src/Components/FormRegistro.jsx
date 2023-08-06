import React from 'react'
import { Link } from 'react-router-dom'

export default function FormRegistro() {
    const host="http://localhost:9000/user";
    function registrar(){
        //Capturar los datos de las cajas de textos
        //Petición Ajax con fetch para consumir la Api
        //Obtener los datos 
        //Mostrar una confirmación de que fueron guardados en caso efectivo o confirmación de error 
        const typeDoc = document.getElementById("typeDoc").value;
        const doc = document.getElementById("doc").value;
        const nom = document.getElementById("nom").value;
        const mail = document.getElementById("mail").value;
        const password = document.getElementById("password").value;
        const tel = document.getElementById("tel").value;
        const dir = document.getElementById("dir").value;
        const datetime = document.getElementById("datetime").value;
        const rol = document.getElementById("rol").value;
        fetch(`${host}/registrar`,{
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
            <form action="">
                <div className="form-group ">
                    <h3>Crear cuenta</h3>
                    <img src="img/microscopio2.png" className="d-block w-50 h-25 mx-auto" alt="img 1" />
                    <label for="" className="form-label">Tipo de Documento</label>
                    <select id="typeDoc" className="form-control">
                    <option selected>Elija el Tipo de Documento</option>
                        <option value="Cedula de Ciudadania">Cedula Ciudadania</option>
                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                        <option value="Registro Civil">Registro Civil</option>
                        <option value="DNI(Pasaporte)">DNI(Pasaporte)</option>
                        <option value="Cedula Extranjeria">Cedula Extranjeria</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">No. Documento</label>
                    <input type="number" className="form-control" id="doc" placeholder="No. Documento" />
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="nom" placeholder="Nombre Completo" />
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="mail" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Telefono</label>
                    <input type="number" className="form-control" id="tel" placeholder="# Telefono" />
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Direccion Residencia</label>
                    <input type="text" className="form-control" id="dir" placeholder="Direccion Residencia" />
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Fecha Nacimiento</label>
                    <input type="date" className="form-control" id="datetime" placeholder="yyyy-mm-dd" />
                </div>
                <label for="" className="form-label">Rol</label>
                <select id="rol" className="form-control">
                    <option selected>Elija el Tipo de Rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Paciente">Paciente</option>
                    <option value="Usuario Interno">Usuario Interno</option>
                </select>
                <br/>
                <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary btn-block" type="button" onClick={registrar}>Registrar</button>
                    <Link to="/Login">
                        <button className="btn btn-primary btn-block" style = {{"margin-top":"4px"}} type="button" >Volver</button>
                    </Link>
                </div>
                <br />
            </form>
        </>
    )
}