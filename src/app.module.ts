import { Module } from '@nestjs/common';
import { ConfigEnvModule } from './config/env/configenv.module';
import { PersonaModule } from './modules/persona/persona.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthModule } from './modules/auth/auth.module';
import { TipoDocumentoModule } from './modules/tipo-documento/tipo-documento.module';

@Module({
  imports: [
    ConfigEnvModule,
    PersonaModule,
    UsuarioModule,
    AuthModule,
    TipoDocumentoModule]
})
export class AppModule { }
