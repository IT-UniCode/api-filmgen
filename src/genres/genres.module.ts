import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GenreEntity } from './entities/genre.entity';
import { GenresController } from './genres.controller';
import { GenresRepository } from './genres.repository';
import { GenresService } from './genres.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenreEntity])],
  controllers: [GenresController],
  providers: [GenresService, GenresRepository],
})
export class GenresModule {}
