import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import FormData from 'form-data';
import { findUrlUtil } from '../../core/utils/find-url.util';

import { MaxMinYearResDTO } from './dto/max-min-year.response.dto';
import { PaginateMoviesDto } from './dto/paginate-movie.dto';
import { PaginationBodyDTO } from './dto/pagination-body.dto';
import { PaginationResDTO } from './dto/pagination.result.dto';
import { MovieEntity } from './entities/movie.entity';
import { MoviesRepository } from './movies.repository';
import { IFindMovieById } from './types/main';

@Injectable()
export default class MoviesService {
  constructor(
    private moviesRepository: MoviesRepository,
    private httpService: HttpService,
  ) {}

  async findAllPaginate(
    paginateMoviesDto: PaginateMoviesDto,
    paginationBodyDTO: PaginationBodyDTO,
  ): Promise<PaginationResDTO> {
    const result = await this.moviesRepository.findAllPaginate(
      paginateMoviesDto,
      paginationBodyDTO.filters,
    );

    return {
      data: result,
      ...paginationBodyDTO,
    };
  }

  async findMovieById(movieId: number): Promise<IFindMovieById> {
    const movie = await this.moviesRepository.findMovieById(movieId);
    try {
      const bodyData = new FormData();
      bodyData.append('q', movie.title);
      const { data } = await this.httpService.axiosRef.post(
        process.env.REZKA_URL,
        bodyData,
      );

      const url = findUrlUtil(data);

      return { ...movie, urls: [{ rezkaUrl: url }] };
    } catch {
      return { ...movie, urls: [] };
    }
  }

  async findLastPopular(getLastPopularDto: number): Promise<MovieEntity[]> {
    return this.moviesRepository.findLastPopular(getLastPopularDto);
  }

  async getMaxMinYear(): Promise<MaxMinYearResDTO> {
    return this.moviesRepository.getMaxMinYear();
  }
}
