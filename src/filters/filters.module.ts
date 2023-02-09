import { Module } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { FiltersController } from './filters.controller';
import { GenresModule } from 'genres/genres.module';
import { MoviesModule } from 'movies/movies.module';

@Module({
  imports: [GenresModule, MoviesModule],
  controllers: [FiltersController],
  providers: [FiltersService],
})
export class FiltersModule {}
