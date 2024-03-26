import mongoose, { Schema } from "mongoose";


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

const usuarioSchema = new Schema({
  email: {
    type: String,
    required: [true, 'El campo de correo electrónico es obligatorio'],
    minLength: [6, 'El correo electrónico debe tener al menos 2 caracteres'],
    maxLength: [20, 'El correo electrónico no puede exceder los 20 caracteres'],
    unique: true,
    match: [emailRegex, 'Por favor, introduce una dirección de correo electrónico válida'],
  },
  password: {
    type: String,
    required: [true, 'El campo de contraseña es obligatorio'],
    minLength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    maxLength: [20, 'La contraseña no puede exceder los 20 caracteres'],
    match: [passwordRegex, 'La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial'],
  }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;
