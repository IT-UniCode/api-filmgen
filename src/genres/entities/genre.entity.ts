import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/core/entities/base.entity';
import { Column, Entity } from 'typeorm';

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
