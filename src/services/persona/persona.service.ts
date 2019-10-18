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
        let filter = new PersonaDto();
        filter.numeroDocumento = personaDto.numeroDocumento;
        filter.tipoDocumento = personaDto.tipoDocumento;
        const existePersona = await this.obtenerPersona(filter);
        if (existePersona) {
            throw new HttpException('Ya se encuenta registrada una persona con el número y tipo de documento ingresados', HttpStatus.CONFLICT);
        }
        const personaCreate = new this.personaModel(personaDto);
        return await personaCreate.save();
    }

    async modificarPersona(id: string, personaDto: PersonaDto) {
        await this.personaModel.updateOne({ _id: id }, personaDto);
        let persona = await this.obtenerPersonaPorId(id);
        return { data: persona };
    }

    async listarPersona(personaDto: PersonaDto): Promise<IPersona[]> {
        let filter = {};
        if (personaDto) {
            filter = { ...personaDto };
        }
        return await this.personaModel.find(filter).populate('tipoDocumento');
    }

    async obtenerPersonaPorId(id: string) {
        return await this.personaModel.findOne({ _id: id });
    }

    async obtenerPersona(personaDto: PersonaDto) {
        let filter = {};
        if (personaDto) {
            filter = { ...personaDto };
        }
        return await this.personaModel.findOne(filter);
    }

    async eliminarPersona(id: string) {
        const personaEliminada = await this.personaModel.findOneAndRemove({ _id: id });
        if (personaEliminada) {
            return personaEliminada;
        } else {
            throw new HttpException('La persona no existe', HttpStatus.CONFLICT);
        }
    }

}
