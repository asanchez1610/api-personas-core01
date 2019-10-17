import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { ctts } from '../../util/constants';
import { IPersona } from '../../models/interfaces/persona.interface';
import { PersonaDto } from '../../models/dtos/persona.dto';

@Injectable()
export class PersonaService {

    constructor(
        @Inject(ctts.db.models.persona.provide)
        private readonly personaModel: Model<IPersona>) { }

    async crearPersona(personaDto: PersonaDto) {
        const personaCreate = new this.personaModel(personaDto);
        return await personaCreate.save();
    }

    async modificarPersona(id: string, personaDto: PersonaDto) {
        await this.personaModel.updateOne({ _id: id }, personaDto);
        let persona = await this.obtenerPersonaPorId(id);
        return { data: persona };
    }

    async listarPersona(personaDto: PersonaDto): Promise<IPersona[]> {
        return await this.personaModel.find().exec();
    }

    async obtenerPersonaPorId(id: string) {
        return await this.personaModel.findOne({ _id: id });
    }

    async eliminarPersona(id: string) {
        const personaEliminada = await this.personaModel.findOneAndRemove({ _id: id });
        if(personaEliminada) {
            return personaEliminada;
        } else {
            throw new HttpException('La persona no existe', HttpStatus.CONFLICT);
        }
    }

}
