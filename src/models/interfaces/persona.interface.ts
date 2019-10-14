import { Document } from 'mongoose';

export interface Persona extends Document {
     readonly nombres: string;
     readonly apellidos: string;
     readonly telefono: string;
     readonly email: string;
     readonly numeroDocumento: string;
}