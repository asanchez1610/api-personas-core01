import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ctts } from '../../util/constants';
import { Persona } from '../../models/interfaces/persona.interface';

@Injectable()
export class PersonaService {

    constructor(@Inject(ctts.db.models.persona.provide) 
                private readonly personaModel: Model<Persona> ) {}

   async listarPersona(): Promise<Persona[]> {
       return await this.personaModel.find().exec();
   }             
    
}
