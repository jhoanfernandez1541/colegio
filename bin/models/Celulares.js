
// mongoose nos permite conectarnos a nuestras bases de datos y hacer CRUD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquema es la estructura de datos de nuestra colección, definimos los tipos de datos
// y sus relaciones
const CelularesSchema = new Schema(
  {
    nombre: String,
    creador: String,
    nacionalidad: String,
    // vinculamos alos celulares a muchas aplicaciones (array)
    aplicaciones: [
      {
        type: Schema.Types.ObjectId,
        ref: "Aplicaciones"
      } 
    ]
  }
);

// exportamos el modelo
var Celulares = mongoose.model("Celulares", CelularesSchema);
module.exports = Celulares;