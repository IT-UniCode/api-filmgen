import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  ValidateIf,
} from 'class-validator';
import { GetByIdsDto } from 'genres/dto/get-by-ids.dto';

import { Filters } from '../../../core/enums/main';

export class FilterMoviesDto extends GetByIdsDto {
  @ApiProperty({
    enum: Filters,
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(Filters)
  field: Filters;

  @ApiProperty({ type: Number, nullable: true, example: 2021 })
  @IsNotEmpty()
  @IsInt()
  from: number;

  @ApiProperty({ type: Number, nullable: true, example: 2023 })
  @IsNotEmpty()
  @IsInt()
  to: number;
}
