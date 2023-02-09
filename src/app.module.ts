import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
})
export class AppModule {}
