import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { IPositiveRequest } from 'core/types/main';

import { IdValidationPipe } from '../../pipes/id-validation.pipes';

import { MaxMinYearResDTO } from './dto/max-min-year.response.dto';
import { PaginateMoviesDto } from './dto/paginate-movie.dto';
import { PaginationBodyDTO } from './dto/pagination-body.dto';
import { PaginationResDTO } from './dto/pagination.result.dto';
import { MovieEntity } from './entities/movie.entity';
import MoviesService from './movies.service';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Cron(CronExpression.EVERY_DAY_AT_10AM)
  fetch(): Promise<IPositiveRequest> {
    return this.moviesService.fetchMovies();
  }

  @ApiOperation({ summary: 'Get movie with pagination, sort and filter' })
  @ApiOkResponse({
    type: PaginationResDTO,
  })
  @Post('pagination')
  async findAllPaginate(
    @Query() paginateMoviesDto: PaginateMoviesDto,
    @Body() paginationBodyDTO: PaginationBodyDTO,
  ): Promise<PaginationResDTO> {
    return this.moviesService.findAllPaginate(
      paginateMoviesDto,
      paginationBodyDTO,
    );
  }

  @ApiOperation({ summary: 'Get movie by ID' })
  @ApiOkResponse({
    type: MovieEntity,
  })
  @Get('get-by-id/:movieId')
  async findMovieById(
    @Param('movieId', IdValidationPipe) movieId: number,
  ): Promise<MovieEntity> {
    return this.moviesService.findMovieById(movieId);
  }

  @ApiOperation({ summary: 'Get last 10 popular' })
  @ApiOkResponse({
    type: MovieEntity,
    isArray: true,
  })
  @Get('last-popular')
  async findLastPopular(): Promise<Array<MovieEntity>> {
    return this.moviesService.findLastPopular();
  }

  @ApiOperation({ summary: 'Get max and min realese year' })
  @ApiOkResponse({
    type: MaxMinYearResDTO,
  })
  @Get('get-max-min-year')
  async getMaxMinYear(): Promise<MaxMinYearResDTO> {
    return this.moviesService.getMaxMinYear();
  }
}
