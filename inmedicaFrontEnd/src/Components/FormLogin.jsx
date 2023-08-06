import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from "react";


export default function FormLogin() {

    const mailref  = useRef();
    const passwordref = useRef();
    const navegacion = useNavigate();

    function ingresar() {
        const mail = mailref.current.value;
        const password = passwordref.current.value;
        fetch("http://localhost:9000/login/ingresar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({mail, password})
        })
        .then(res=>res.json())
        .then(res=>{
            if (res.estado === "OK"){
                navegacion("/Dashboard");
            }else{ 
                navegacion("/Login");
                alert(res.msg);
            }  
        })
        .catch(error=>alert(error));
    }

    return (
        <>
            <form>
                <div className="form-group ">
                    <h3>Iniciar sesión</h3>
                    <img src="img/microscopio2.png" className="d-block w-50 h-25 mx-auto" alt="img 1"/>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="mail" placeholder="Ingrese su correo" ref={mailref}/>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="pass" placeholder="Ingrese su contraseña" ref={passwordref}/>
                </div>
                <div className="align-items-center">
                    <div>
                        <label className="checkbox m-1">
                            <input type="checkbox" name=""/>
                            <span></span>Recuérdame</label>
                    </div>
                    <a href="">¿Has olvidado tu contraseña?</a>
                </div><br/>
                <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary btn-block" type="button" onClick={ingresar}>Iniciar</button>
                    <Link to="/">
                        <button className="btn btn-primary btn-block" style = {{"margin-top":"4px"}}type="button">Volver</button>
                    </Link> 
                </div>
                <div>
                    <span>¿No tienes cuenta?</span>
                    <Link to="/Registro">
                        <a >¡Registrate!</a>
                    </Link>
                </div>
                <br/>
            </form>
        </>
    )
}