import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ctts } from '../../util/constants';
import { IPersona } from '../../models/interfaces/persona.interface';
import { PersonaDto } from '../../models/dtos/persona.dto';

@Injectable()
export class PersonaService {

    constructor(@Inject(ctts.db.models.persona.provide)
    private readonly personaModel: Model<IPersona>) { }

    async crearPersona(personaDto: PersonaDto) {
        const personaCreate = new this.personaModel(personaDto);
        return await personaCreate.save();
    }

    async modificarPersona(id: string, personaDto: PersonaDto) {
        const personaUpdate = await this.personaModel.updateOne({ _id: id }, personaDto);
        let persona = await this.obtenerPersonaPorId(id);
        return { data: persona };
    }

    async listarPersona(): Promise<IPersona[]> {
        return await this.personaModel.find().exec();
    }

    async obtenerPersonaPorId(id: string) {
        return await this.personaModel.findOne({ _id: id });
    }

    async eliminarPersona(id: string) {
        return await this.personaModel.findOneAndRemove({ _id: id });
    }

}
