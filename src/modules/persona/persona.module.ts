import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database/database.module';
import { PersonaController } from '../../controllers/persona/persona.controller';
import { PersonaService } from '../../services/persona/persona.service';
import { PersonaProvider } from '../../models/providers/persona.provider';

@Module({
    imports: [ DatabaseModule ],
    controllers: [ PersonaController ],
    providers: [ PersonaService, ...PersonaProvider ]
})
export class PersonaModule {}
