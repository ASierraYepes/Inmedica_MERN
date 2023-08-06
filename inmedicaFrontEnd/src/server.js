
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// -----------Base de dato Mongo--------------------

mongoose.connect("mongodb://localhost:27017/usuarios")
.then(res => console.log(res,"Conectado a a la base de datos."))
.catch(err => console.log(err));


//--------------------------------------------------
//-------CRUD-------





//----------------
app.listen(8081, function(){
    console.log("servidor por el puerto 8081")
});