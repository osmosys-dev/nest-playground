import { Module } from '@nestjs/common';
import { MongooseModule  } from "@nestjs/mongoose";
import { MONGODB_CONNECTION_URL } from './constants';
import { SeasonsModule } from './seasons/seasons.module';


@Module({
  imports: [
    SeasonsModule, 
    MongooseModule.forRoot(MONGODB_CONNECTION_URL)
  ]
})
export class AppModule {}
