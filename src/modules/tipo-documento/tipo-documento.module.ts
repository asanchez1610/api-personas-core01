import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database/database.module';
import { TipoDocumentoController } from '../../controllers/tipo-documento/tipo-documento.controller';
import { TipoDocumentoService } from '../../services/tipo-documento/tipo-documento.service';
import { TipoDocumentoProvider } from '../../models/providers/tipoDocumento.provider';


@Module({
    imports: [DatabaseModule],
    controllers: [TipoDocumentoController],
    providers: [TipoDocumentoService, ...TipoDocumentoProvider],
    exports: [TipoDocumentoService]
})
export class TipoDocumentoModule { }
