import { ApiProperty } from '@nestjs/swagger';

import { FilterResDTO } from './filter.result.dto';
import { PaginationBodyDTO } from './pagination-body.dto';

export class PaginationResDTO extends PaginationBodyDTO {
  @ApiProperty({ type: FilterResDTO })
  data: FilterResDTO;
}
