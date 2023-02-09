import { ApiProperty } from '@nestjs/swagger';

import { GenreEntity } from 'genres/entities/genre.entity';
import { MaxMinYearResDTO } from 'movies/dto/max-min-year.response.dto';

export class GetAllFiltersRes extends MaxMinYearResDTO {
  @ApiProperty({ type: GenreEntity, isArray: true })
  genres: GenreEntity[];
}
