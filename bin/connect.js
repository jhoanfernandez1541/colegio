const mongoose = require("mongoose");

//password:ldwNTmqbKkbMpPmC
//user: jfernandez

//Intentamos conectarnos
try {
    //se intenta establecer una conexion con los datos de conexion
    mongoose.connect("mongodb+srv://jhoanghost1541:6ERGZmMEk66RAo8B@cluster0.nkuzr.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true }
    );
    //en caso de esablecer la conexion, se muestra en consola este mensaje
    console.log("Connected databases.");
} catch (e) {
    //en caso de haber un error se muestra en consola el error
    console.error(e);
}