import { Controller, Get } from '@nestjs/common';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../models/interfaces/persona.interface';

@Controller('personas')
export class PersonaController {

    constructor(private readonly personaService: PersonaService) {}

    @Get()
    findAll(): Promise<Persona[]> {
        return this.personaService.listarPersona();
    }

}
