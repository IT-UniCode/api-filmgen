import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class GetLastPopularDto {
  @ApiProperty({ type: Number, default: 10, required: true })
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(200)
  moviesAmount: number;
}
