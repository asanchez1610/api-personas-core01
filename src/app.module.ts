import { Module } from '@nestjs/common';
import { ConfigEnvModule } from './config/env/configenv.module';
import { PersonaModule } from './modules/persona/persona.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    ConfigEnvModule,
    PersonaModule,
    UsuarioModule,
    AuthModule]
})
export class AppModule { }
