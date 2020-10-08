import { Module } from '@nestjs/common';
import { SeasonsModule } from './seasons/seasons.module';


@Module({
  imports: [SeasonsModule]
})
export class AppModule {}
