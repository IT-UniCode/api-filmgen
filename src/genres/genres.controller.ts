import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { GetByIdsDto } from './dto/get-by-ids.dto';
import { GenreEntity } from './entities/genre.entity';
import { GenresService } from './genres.service';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

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
}
