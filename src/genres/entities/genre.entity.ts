import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from 'core/entities/base.entity';

@Entity('genres')
export class GenreEntity extends BaseEntity {
  constructor(partial: Partial<GenreEntity>) {
    super();
    Object.assign(this, partial);
  }

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: '400', nullable: false })
  name: string;
}
