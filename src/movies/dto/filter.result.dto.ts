import { ApiProperty } from '@nestjs/swagger';

import { MovieEntity } from '../entities/movie.entity';

export class FilterResDTO {
  @ApiProperty({ type: Number })
  page_size: number;

  @ApiProperty({ type: Number })
  page: number;

  @ApiProperty({ type: [MovieEntity] })
  results: MovieEntity[];

  @ApiProperty({ type: Number })
  total_pages: number;

  @ApiProperty({ type: Number })
  total_results: number;
}
