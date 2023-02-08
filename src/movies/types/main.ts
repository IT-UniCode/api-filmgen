import { MovieEntity } from 'movies/entities/movie.entity';
import { IPagination } from '../../../core/types/main';

export interface IMovie {
  id: number;
  name: string;
}

export interface IMoviesPagination extends IPagination {
  page_size: number;
}

export interface IFindMovieById extends MovieEntity {
  rezkaUrl?: string;
}
