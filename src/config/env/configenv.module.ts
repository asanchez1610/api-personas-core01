import { Module } from '@nestjs/common';
import { ConfigEnvService } from './configenv.service'; 

@Module({
    providers:[
        {
            provide: ConfigEnvService,
            useValue: new ConfigEnvService(`${process.env.MODE_ENV || 'development'}.env`)
        }
    ]
})
export class ConfigEnvModule {}
