import { Controller, Get } from '@nestjs/common';
import { IPositiveRequest } from 'src/core/types/main';

import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  fetch(): Promise<IPositiveRequest> {
    return this.genresService.fetchGenres();
  }
}
