import { Controller, Post, Body, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { TipoDocumentoService } from '../../services/tipo-documento/tipo-documento.service';
import { TipoDocumentoDto } from '../../models/dtos/tipoDocumento.dto';
import { AuthGuard } from '@nestjs/passport';
import { ctts } from '../../util/constants';

@Controller('tipo-documento')
@UseGuards(AuthGuard(ctts.keys.strategyJwtName))
export class TipoDocumentoController {
    constructor(
        private readonly tipoDocumentoService: TipoDocumentoService
    ) { }

    @Post()
    async crearTipoDocumento(@Body() tipoDoc: TipoDocumentoDto) {
        return await this.tipoDocumentoService.crearTipoDpcumento(tipoDoc);
    }

    @Get()
    async listarTipoDocumento() {
        const documentos = await this.tipoDocumentoService.listarTipoDocumento();
        return { data: documentos };
    }

    @Delete(':id')
    async eliminarTipoDocumento(@Param() params) {
        return { data: this.tipoDocumentoService.eliminarTipoDocumento(params.id) }
    }

}
