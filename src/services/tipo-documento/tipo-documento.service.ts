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

    async crearTipoDpcumento(tipoDocumentoDto: TipoDocumentoDto) {
        const tipoDocumentoCreate = new this.tipoDocumentoModel(TipoDocumentoDto);
        return await tipoDocumentoCreate.save();
    }

    async listarTipoDocumento() {
        return await this.tipoDocumentoModel.find().exec();
    }

    async obtenerTipoDocumentoPorCodigo(codigo: string) {
        return await this.tipoDocumentoModel.findOne({ codigo: codigo });
    }

    async eliminarTipoDocumento(id: string) {
        const tipoDocumentoEliminado = this.tipoDocumentoModel.findOneAndRemove({ _id: id });
        if (tipoDocumentoEliminado) {
            return tipoDocumentoEliminado;
        } else {
            throw new HttpException('Tipo documento no existe', HttpStatus.CONFLICT);
        }
    }

}
