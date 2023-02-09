import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

import { FilterMoviesDto } from './filter-movie.dto';

export class PaginationBodyDTO {
  @ApiProperty({ type: [FilterMoviesDto] })
  @ValidateNested({ each: true })
  @Type(() => FilterMoviesDto)
  @IsNotEmpty()
  filters: FilterMoviesDto[];
}
