import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

import { FilterMoviesDto } from './filter-movie.dto';

export class PaginationBodyDTO {
  @ApiProperty({ type: [FilterMoviesDto] })
  @IsNotEmpty()
  filters: FilterMoviesDto[];
}
