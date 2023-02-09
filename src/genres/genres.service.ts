import { Injectable } from '@nestjs/common';

import { GetByIdsDto } from './dto/get-by-ids.dto';
import { GenreEntity } from './entities/genre.entity';
import { GenresRepository } from './genres.repository';

@Injectable()
export class GenresService {
  constructor(private readonly genresRepository: GenresRepository) {}

  async findAll(): Promise<GenreEntity[]> {
    return this.genresRepository.findAll();
  }

  async findByIds(idsArray: GetByIdsDto): Promise<GenreEntity[]> {
    return this.genresRepository.findByIds(idsArray.genres_ids);
  }
}
