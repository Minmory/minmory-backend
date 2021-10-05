import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import env from 'src/config/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const { DB_CONFIG } = env;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${DB_CONFIG.DB_USER}:${DB_CONFIG.DB_PASSWORD}@${DB_CONFIG.DB_HOST}/${DB_CONFIG.DB_NAME}?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
