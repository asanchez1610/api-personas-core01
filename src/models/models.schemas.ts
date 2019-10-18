import * as mongoose from 'mongoose';
import { ctts } from '../util/constants';

export const PersonaSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    telefono: String,
    email: String,
    numeroDocumento: String,
    tipoDocumento: { type: mongoose.Schema.Types.ObjectId, ref: ctts.db.models.tipoDocumento.entityName }
});

export const UsuarioSchema = new mongoose.Schema({
    userName: String,
    password: String
});

export const TipoDocumentoSchema = new mongoose.Schema({
    descripcion: String,
    codigo: String
});