import Footer from "./Components/Footer";
import NavbarInicio from "./Components/NavbarInicio";
import React, {useState} from "react";
import emailjs from "emailjs-com";

const Inicio= () => {
  const frmContact = { userEmail:"", userName:"", emailDetails:"" };
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send("service_nog9n68","template_z7nozn4", contact, "user_lHR8bhnKaN4aF2zHDNl5D")
		.then((response) => {
				   console.log("SUCCESS!", response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log("FAILED...", err);
		});  
  }

  return (
    <div>
      <header>
          <NavbarInicio/>
      </header>
      {/* <!--Carousel Wrapper--> */}
            <div id="carousel-example-1z" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
              {/* <!--Indicators--> */}
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
              </ol>
              {/* <!--/.Indicators--> */}
              {/* <!--Slides--> */}
              <div className="carousel-inner" role="listbox">
                {/* <!--First slide--> */}
                <div className="carousel-item active">
                  <img className="d-block w-100" src="img/img1.jpg" alt="First slide"/>
                </div>
                {/* <!--/First slide--> */}
                {/* <!--Second slide--> */}
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/img2.jpg" alt="Second slide"/>
                </div>
                {/* <!--/Second slide--> */}
                {/* <!--Third slide--> */}
                <div className="carousel-item">
                  <img className="d-block w-100" src="img/img3.jpg" alt="Third slide"/>
                </div>
                {/* <!--/Third slide--> */}
              </div>
              {/* <!--/.Slides--> */}
              {/* <!--Controls--> */}
              <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
              {/* <!--/.Controls--> */}
            </div>
            <section class="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto" id="intro">
            <h1 class="p-3 fs-2 border-top border-3">Un laboratorio único para todas tus <span class="text-primary">necesidades.</span></h1>
          </section>
      
      <main>
        <div className="container">
          <div className="row">
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img5.jpg" className="card-img-top" alt="imagen 5"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>COMUNICADO</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="#" className="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img4.jpg" className="card-img-top" alt="imagen 4"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>MEDIDAS DE SEGURIDAD</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor  (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="#" className="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/img6.jpg" className="card-img-top" alt="imagen 6"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>NOTICIAS</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" id="Contactanos">
                  <div className="card-body">
                  {showMessage ? <div className="alert alert-success col-md-12 text-center" role="alert">Correo enviado exitosamente!!</div> : ``}

                    <h5 className="card-title"><b>CONTACTANOS</b></h5>
                    {/* <label for="exampleFormControlInput1">Correo</label>
                    <input className="form-control" type="email" placeholder="email@example.com"/>
                    <label for="exampleFormControlInput1">Mensaje</label>
                    <textarea className="form-control" type="text" placeholder="Ingrese aqui su mensaje..."></textarea>
                    <br/>
                    <a href="#" className="btn btn-primary btn-block">Enviar</a> */}


                  <form onSubmit={handleSubmit}>
                    <div className="pt-2 col-md-12">
                      <div className="form-group text-left"> <b>Ingrese tu nombre: </b> <br />
                        <input  required type="text" value={contact.userName} name="userName" onChange={handleChange} className="form-control" placeholder="Ingrese tu Nombre" />
                      </div>
                    </div>
                    <div className="pt-1 col-md-12 ">
                      <div className="form-group text-left"> <b>Ingrese tu correo: </b> <br />
                        <input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Correo electronico" />
                      </div>
                    </div>
                    <div className="pt-1 col-md-12">
                      <div className="form-group text-left"> <b>Mensaje: </b> <br />
                        <textarea required name="emailDetails" rows="7" onChange={handleChange} className="form-control" placeholder="Escribe tu mensaje" value={contact.emailDetails}></textarea>
                      </div>
                    </div>
                    <div className="pt-1 col-md-12 ">
                      <button className="btn btn-primary btn-block">Enviar</button>
                    </div>
                  </form>

                  </div>
                </div>
              </div>
          </div>
        </div>  
      </main>
      <br/>
      <Footer/>
    </div>
  );
}

export default Inicio;