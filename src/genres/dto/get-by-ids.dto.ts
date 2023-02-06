import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GetByIdsDto {
  @ApiProperty({ type: Number, isArray: true })
  @IsNumber({}, { each: true })
  ids: number[];
}
