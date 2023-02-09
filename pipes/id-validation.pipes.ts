import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isNumber } from 'class-validator';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata): number {
    if (metadata.type !== 'param') {
      return value;
    }

    if (value < 1 && !isNumber(value)) {
      throw new BadRequestException('Invalid ID format');
    }

    return value;
  }
}
