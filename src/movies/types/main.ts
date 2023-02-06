import { IPagination } from 'src/core/types/main';

export interface IMovie {
  id: number;
  name: string;
}

export interface IMoviesPagination extends IPagination {
  page_size: number;
}
