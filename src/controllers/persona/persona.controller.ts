import { Controller, Get, Post, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../decorators/persona.decorators';
import { PersonaDto } from '../../models/dtos/persona.dto';

@Controller('personas')
export class PersonaController {

    constructor(private readonly personaService: PersonaService) { }

    @Post()
    async crearPersona(@Persona() persona: PersonaDto) {
        return await this.personaService.crearPersona(persona);
    }

    @Put(':id')
    async modificarPersona(@Param() params, @Persona() persona: PersonaDto) {
        return await this.personaService.modificarPersona(params.id, persona);
    }

    @Get()
    async listarPersona(@Persona() persona: PersonaDto) {
        let personas = await this.personaService.listarPersona();
        return { data: personas };
    }

    @Get(':id')
    async obtenerPersona(@Param() params) {
        let persona = await this.personaService.obtenerPersonaPorId(params.id);
        return { data: persona };
    }

    @Delete(':id')
    async eliminarPersona(@Param() params) {
        let personaEliminada = await this.personaService.eliminarPersona(params.id);
        if(personaEliminada) {
            return { data : personaEliminada };
        } else {
            throw new HttpException('La persona no existe', HttpStatus.CONFLICT);
        }
        
    }

}
