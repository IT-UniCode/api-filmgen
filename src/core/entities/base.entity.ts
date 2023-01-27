import { PrimaryColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryColumn()
  id: number;
}
