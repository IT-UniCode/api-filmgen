import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { IPositiveRequest } from 'core/types/main';

import { GetByIdsDto } from './dto/get-by-ids.dto';
import { GenreEntity } from './entities/genre.entity';
import { GenresService } from './genres.service';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @ApiOperation({ summary: 'Get all genres' })
  @ApiOkResponse({ type: GenreEntity, isArray: true })
  @Get('all')
  findAllGenres(): Promise<GenreEntity[]> {
    return this.genresService.findAll();
  }

  @ApiOperation({ summary: 'Get genres by ids' })
  @ApiOkResponse({ type: GenreEntity, isArray: true })
  @Post('ids')
  findByIds(@Body() idsArray: GetByIdsDto): Promise<GenreEntity[]> {
    return this.genresService.findByIds(idsArray);
  }

  @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_NOON)
  fetch(): Promise<IPositiveRequest> {
    return this.genresService.fetchGenres();
  }
}
