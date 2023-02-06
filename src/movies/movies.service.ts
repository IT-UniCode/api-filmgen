import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IPagination, IPositiveRequest } from 'src/core/types/main';

import { MaxMinYearResDTO } from './dto/max-min-year.response.dto';
import { PaginateMoviesDto } from './dto/paginate-movie.dto';
import { PaginationBodyDTO } from './dto/pagination-body.dto';
import { PaginationResDTO } from './dto/pagination.result.dto';
import { MovieEntity } from './entities/movie.entity';
import { MoviesRepository } from './movies.repository';

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

  async findMovieById(movieId: number): Promise<MovieEntity> {
    return this.moviesRepository.findMovieById(movieId);
  }

  async findLastPopular(): Promise<Array<MovieEntity>> {
    return this.moviesRepository.findLastPopular();
  }

  async getMaxMinYear(): Promise<MaxMinYearResDTO> {
    return this.moviesRepository.getMaxMinYear();
  }

  async fetchMovies(): Promise<IPositiveRequest> {
    let page = 1;

    const sort_by = 'primary_release_date.asc';
    const primary_release_date = new Date().toJSON().slice(0, 10);

    setInterval(async () => {
      const { data } = await this.httpService.axiosRef.get<IPagination>(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=${sort_by}&include_adult=true&page=${page}&language=ru&primary_release_date.gte=${primary_release_date}`,
      );
      if (data) {
        throw new BadRequestException('Not found');
      }

      await this.moviesRepository.saveMovies(data.results);

      page++;
    }, 3000);

    return { success: true };
  }
}
