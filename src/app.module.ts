import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IdValidationPipe } from '../pipes/id-validation.pipes';

import { configService } from './config/config.service';
import { GenresModule } from './genres/genres.module';
import { MoviesModule } from './movies/movies.module';
import { FiltersModule } from './filters/filters.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    GenresModule,
    MoviesModule,
    FiltersModule,
  ],
})
export class AppModule {}
