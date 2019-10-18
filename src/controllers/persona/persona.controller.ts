import { Controller, Get, Post, Put, Param, Delete, UseGuards, Body } from '@nestjs/common';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../decorators/persona.decorators';
import { PersonaDto } from '../../models/dtos/persona.dto';
import { AuthGuard } from '@nestjs/passport';
import { ctts } from '../../util/constants';
import { ApiBearerAuth, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';

@Controller('personas')
@UseGuards(AuthGuard(ctts.keys.strategyJwtName))
@ApiBearerAuth()
export class PersonaController {

    constructor(private readonly personaService: PersonaService) { }

    @Post()
    async crearPersona(@Body() persona: PersonaDto) {
        return await this.personaService.crearPersona(persona);
    }

    @Put(':id')
    @ApiOperation({ title: 'Metodo de modificacion de personas' })
    @ApiImplicitParam({ name: 'id', required: true, type: String })
    async modificarPersona(@Param() params, @Body() persona: PersonaDto) {
        return await this.personaService.modificarPersona(params.id, persona);
    }

    @Get()
    @ApiOperation({ title: 'Listado de usuario' })
    async listarPersona(@Persona() persona: PersonaDto) {
        let personas = await this.personaService.listarPersona(persona);
        return { data: personas };
    }

    @Get(':id')
    @ApiOperation({ title: 'Metodo obtener persona por id' })
    @ApiImplicitParam({ name: 'id', required: true, type: String })
    async obtenerPersona(@Param() params) {
        let persona = await this.personaService.obtenerPersonaPorId(params.id);
        return { data: persona };
    }

    @Delete(':id')
    @ApiOperation({ title: 'Metodo eliminacion de persona por id' })
    @ApiImplicitParam({ name: 'id', required: true, type: String })
    async eliminarPersona(@Param() params) {
        let personaEliminada = await this.personaService.eliminarPersona(params.id);
        return { data: personaEliminada };
    }

}
