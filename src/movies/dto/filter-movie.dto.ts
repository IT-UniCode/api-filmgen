import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

import { Filters } from '../../../core/enums/main';

export class FilterMoviesDto {
  @ApiProperty({
    enum: Filters,
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(Filters)
  field?: Filters;

  @ApiProperty({ type: Number, default: null })
  @IsNotEmpty()
  from: number;

  @ApiProperty({ type: Number, default: null })
  @IsNotEmpty()
  to: number;

  @ApiProperty({ type: Number, isArray: true, default: [] })
  @IsNumber({}, { each: true })
  genre_ids: number[];
}
