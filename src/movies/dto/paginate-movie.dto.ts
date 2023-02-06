import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { PaginateDto } from '../../../core/dto/paginate.dto';
import { Ordering, SortDirection } from '../../../core/enums/main';

export class PaginateMoviesDto extends PaginateDto {
  @ApiPropertyOptional({ type: String, name: 'searchTerm' })
  @IsOptional()
  @IsString()
  searchTerm?: string;

  @ApiPropertyOptional({
    enum: SortDirection,
    name: 'dir',
    default: SortDirection.Descend,
  })
  @IsOptional()
  @IsEnum(SortDirection)
  dir?: SortDirection;

  @ApiPropertyOptional({
    enum: Ordering,
    name: 'orderBy',
    default: Ordering.Popularity,
  })
  @IsOptional()
  @IsEnum(Ordering)
  orderBy?: Ordering;
}
