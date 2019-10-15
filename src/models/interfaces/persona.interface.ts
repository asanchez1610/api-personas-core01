import { Document } from 'mongoose';

export interface IPersona extends Document {
     readonly nombres: string;
     readonly apellidos: string;
     readonly telefono: string;
     readonly email: string;
     readonly numeroDocumento: string;
}