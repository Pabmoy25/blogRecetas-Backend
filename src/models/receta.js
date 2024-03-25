import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLengh: 2,
    MaxLength: 50,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
    minLengh: 10,
    MaxLength: 60,
  },
  imagen: {
    type: String,
    required: true,
    validate: (valor) => {
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(valor);
    },
    message: (dato) => `${dato.value} no es una URL de imagen valida`,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Postres y Dulces", "Pastas", "Carnes", "Guarniciones", "Minutas"],
  },
  ingredientes: {
    type: String,
    required: true,
    minLengh: 20,
    MaxLength: 500,
  },
  preparacion: {
    type: String,
    required: true,
    minLengh: 50,
    MaxLength: 1000,
  },
});

const Receta = mongoose.model('receta', recetaSchema);

export default Receta;
