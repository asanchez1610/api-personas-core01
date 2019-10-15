import { Connection } from 'mongoose';
import { ctts } from '../../util/constants';
import { PersonaSchema } from '../models.schemas';

export const PersonaProvider = [
    {
        provide: ctts.db.models.persona.provide,
        useFactory: (connection: Connection) => connection.model(ctts.db.models.persona.entityName, PersonaSchema),
        inject: [ctts.db.cnxName],
    }
];