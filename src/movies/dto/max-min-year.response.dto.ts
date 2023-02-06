import { ApiProperty } from '@nestjs/swagger';

export class MaxMinYearResDTO {
  @ApiProperty({ type: String })
  max_year: Date;

  @ApiProperty({ type: String })
  min_year: Date;
}
