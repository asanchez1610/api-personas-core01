import { Document } from 'mongoose';

export interface ITipoDocumento extends Document {
    readonly descripcion: string;
    readonly codigo: string;
}