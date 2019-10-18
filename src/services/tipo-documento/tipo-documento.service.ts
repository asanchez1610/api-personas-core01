import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ctts } from '../../util/constants';
import { ITipoDocumento } from '../../models/interfaces/tipoDocumento.interface';
import { Model } from 'mongoose';
import { TipoDocumentoDto } from '../../models/dtos/tipoDocumento.dto';

@Injectable()
export class TipoDocumentoService {

    constructor(
        @Inject(ctts.db.models.tipoDocumento.provide)
        private readonly tipoDocumentoModel: Model<ITipoDocumento>
    ) { }

    async crearTipoDocumento(tipoDocumentoDto: TipoDocumentoDto) {
        tipoDocumentoDto.codigo = tipoDocumentoDto.codigo.toUpperCase();
        const existeTipoDocumento = await this.obtenerTipoDocumentoPorCodigo(tipoDocumentoDto.codigo);
        if(existeTipoDocumento) {
            throw new HttpException(`El tipo de documento: ${tipoDocumentoDto.codigo}, ya existe`,HttpStatus.CONFLICT);
        }
        const tipoDocumentoCreate = new this.tipoDocumentoModel(tipoDocumentoDto);
        return await tipoDocumentoCreate.save();
    }

    async listarTipoDocumento() {
        return await this.tipoDocumentoModel.find().exec();
    }

    async obtenerTipoDocumentoPorCodigo(codigo: string) {
        return await this.tipoDocumentoModel.findOne({ codigo: codigo });
    }

    async eliminarTipoDocumento(id: string) {
        const tipoDocumentoEliminado = await this.tipoDocumentoModel.findOneAndRemove({ _id: id });
        if (tipoDocumentoEliminado) {
            return tipoDocumentoEliminado;
        } else {
            throw new HttpException('Tipo documento no existe', HttpStatus.CONFLICT);
        }
    }

}
