import { PartialType } from '@nestjs/mapped-types';
import { CreateEditionDto } from './create-edition.dto';
import { Book } from '../../book/entities/book.entity';
import { Publisher } from '../../publisher/entities/publisher.entity';

export class UpdateEditionDto extends PartialType(CreateEditionDto) {
    id: number;
    year: number;
    book: Book;
    publisher: Publisher;
}
