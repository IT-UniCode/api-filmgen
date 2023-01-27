import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPositiveRequest } from 'src/core/types/main';
import { Repository } from 'typeorm';

import { GenreEntity } from './entities/genre.entity';
import { IData } from './types/genre.interface';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreEntity: Repository<GenreEntity>,
    private readonly httpService: HttpService,
  ) {}

  async fetchGenres(): Promise<IPositiveRequest> {
    const { data } = await this.httpService.axiosRef.get<IData>(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`,
    );

    if (!data) {
      throw new InternalServerErrorException('Not found');
    }

    const genresEntities = await this.genreEntity.create(data.genres);
    await this.genreEntity.save(genresEntities);

    return { success: true };
  }
}
