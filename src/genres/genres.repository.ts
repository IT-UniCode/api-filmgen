import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPositiveRequest } from 'src/core/types/main';
import { In, Repository } from 'typeorm';

import { GenreEntity } from './entities/genre.entity';
import { IData, IGenre } from './types/genre.interface';

@Injectable()
export class GenresRepository {
  constructor(
    @InjectRepository(GenreEntity)
    private genreEntity: Repository<GenreEntity>,
  ) {}

  async findAll(): Promise<IGenre[]> {
    return this.genreEntity
      .createQueryBuilder('genres')
      .orderBy('genres.name', 'ASC')
      .getMany();
  }

  async findByIds(idsArray: number[]): Promise<IGenre[]> {
    const searchGenres = this.genreEntity.findBy({
      id: In([...idsArray]),
    });
    if (!searchGenres) throw new NotFoundException('Genres is not exist');
    return searchGenres;
  }

  async saveGenres(data: IData): Promise<IPositiveRequest> {
    try {
      const genresEntities = this.genreEntity.create(data.genres);
      await this.genreEntity.save(genresEntities);
      return { success: true };
    } catch (error) {
      throw new BadRequestException('Failed to save genres');
    }
  }
}
