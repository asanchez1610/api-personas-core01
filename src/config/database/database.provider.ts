import * as mongoose from 'mongoose';
import { ConfigEnvService } from '../env/configenv.service';
import { ctts } from '../../util/constants';

const configEnv = new ConfigEnvService(`${process.env.MODE_ENV || 'development'}.env`);

export const databaseProvider = [
    {
        provide: ctts.db.cnxName,
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect(configEnv.get(ctts.db.url))
    }
];