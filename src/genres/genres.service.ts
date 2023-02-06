import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IPositiveRequest } from 'core/types/main';

import { GetByIdsDto } from './dto/get-by-ids.dto';
import { GenreEntity } from './entities/genre.entity';
import { GenresRepository } from './genres.repository';
import { IData } from './types/genre.interface';

@Injectable()
export class GenresService {
  constructor(
    private readonly genresRepository: GenresRepository,
    private readonly httpService: HttpService,
  ) {}

  async findAll(): Promise<GenreEntity[]> {
    return this.genresRepository.findAll();
  }

  async findByIds(idsArray: GetByIdsDto): Promise<GenreEntity[]> {
    return this.genresRepository.findByIds(idsArray.ids);
  }

  async fetchGenres(): Promise<IPositiveRequest> {
    const { data } = await this.httpService.axiosRef.get<IData>(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=ru`,
    );

    if (!data.genres.length) throw new NotFoundException('Genres is not exist');

    return this.genresRepository.saveGenres(data);
  }
}
