import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';

import { Filters } from '../../../core/enums/main';
import { GetByIdsDto } from '../../genres/dto/get-by-ids.dto';

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
