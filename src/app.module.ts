import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigEnvModule } from './config/env/configenv.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigEnvModule],
})
export class AppModule {}
