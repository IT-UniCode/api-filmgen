import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class GetByIdsDto {
  @ApiProperty({ type: Number, isArray: true })
  @IsNumber({}, { each: true })
  @Min(1)
  ids: number[];
}
