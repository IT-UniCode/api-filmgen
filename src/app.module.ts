import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdValidationPipe } from '../pipes/id-validation.pipes';

import { configService } from './config/config.service';
import { FiltersModule } from './filters/filters.module';
import { GenresModule } from './genres/genres.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    GenresModule,
    MoviesModule,
    FiltersModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: IdValidationPipe,
    },
  ],
})
export class AppModule {}
