import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from '../author/entities/author.entity';

@Injectable()
export class AuthorService {
  static authors: Author[] = [];

  create(createAuthorDto: CreateAuthorDto) {
    const newAuthor = new Author();
    newAuthor.name = createAuthorDto.name;
    newAuthor.id = Math.random();
    AuthorService.authors.push(newAuthor);

    return newAuthor.id;
  }

  findAll() {
    return AuthorService.authors;
  }

  findOne(id: number) {
    const author = AuthorService.authors.find((g) => g.id == id);

    if (!author) {
      throw new NotFoundException();
    }

    return author;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = AuthorService.authors.find((g) => g.id == id);

    if (!author) {
      throw new NotFoundException();
    }

    author.name = updateAuthorDto.name;
  }

  remove(id: number) {
    AuthorService.authors = AuthorService.authors.filter((g) => g.id != id);
    return true;
  }
}
