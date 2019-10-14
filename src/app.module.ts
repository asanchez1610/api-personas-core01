import { Module } from '@nestjs/common';
import { ConfigEnvModule } from './config/env/configenv.module';
import { PersonaModule } from './modules/persona/persona.module';

@Module({
  imports: [ConfigEnvModule, PersonaModule]
})
export class AppModule {}
