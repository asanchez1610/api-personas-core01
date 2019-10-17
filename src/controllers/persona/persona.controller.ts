import { Controller, Get, Post, Put, Param, Delete, UseGuards, Body } from '@nestjs/common';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../decorators/persona.decorators';
import { PersonaDto } from '../../models/dtos/persona.dto';
import { AuthGuard } from '@nestjs/passport';
import { ctts } from '../../util/constants';

@Controller('personas')
@UseGuards(AuthGuard(ctts.keys.strategyJwtName))
export class PersonaController {

    constructor(private readonly personaService: PersonaService) { }

    @Post()
    async crearPersona(@Body() persona: PersonaDto) {
        return await this.personaService.crearPersona(persona);
    }

    @Put(':id')
    async modificarPersona(@Param() params, @Body() persona: PersonaDto) {
        return await this.personaService.modificarPersona(params.id, persona);
    }

    @Get()
    async listarPersona(@Persona() persona: PersonaDto) {
        let personas = await this.personaService.listarPersona(persona);
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
        return { data: personaEliminada };
    }

}
