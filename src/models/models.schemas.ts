import * as mongoose from 'mongoose';

export const PersonaSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    telefono: String,
    email: String,
    numeroDocumento: String
});

export const UsuarioSchema = new mongoose.Schema({
    userName: String,
    password: String
});