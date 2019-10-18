import { Connection } from 'mongoose';
import { ctts } from '../../util/constants';
import { TipoDocumentoSchema } from '../models.schemas';

export const TipoDocumentoProvider = [
    {
        provide: ctts.db.models.tipoDocumento.provide,
        useFactory: (connection: Connection) => connection.model(ctts.db.models.tipoDocumento.entityName, TipoDocumentoSchema),
        inject: [ctts.db.cnxName]
    }
];