import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity'
import { AuthorService } from '../author/author.service';
import { GenreService } from '../genre/genre.service';

@Injectable()
export class BookService {

  constructor(private readonly authorService: AuthorService, private readonly genreService: GenreService) {}

  static books: Book[] = [];

  create(createBookDto: CreateBookDto) {
    const newBook = new Book;
    const genre = this.genreService.findOne(createBookDto.genreId);
    console.log(genre);
    const authors = createBookDto.authorsIds.map((a) => this.authorService.findOne(a));
    console.log(authors);
    newBook.name = createBookDto.name;
    newBook.genre = genre;
    newBook.authors = authors;
    newBook.id = Math.random();
    BookService.books.push(newBook);

    return newBook.id;
  }

  findAll() {
    return BookService.books;
  }

  findOne(id: number) {
    const book = BookService.books.find((b) => b.id == id);
    
    if (!book) {
      throw new NotFoundException();
    }

    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const book = BookService.books.find((b) => b.id == id);
    const genre = this.genreService.findOne(updateBookDto.genreId);
    const authors = updateBookDto.authorsIds.map((a) => this.authorService.findOne(a));

    if (!book) {
      throw new NotFoundException();
    }

    if (updateBookDto.name) {
      book.name = updateBookDto.name;
    }
    
    if (updateBookDto.genreId) {
      book.genre = genre;
    }

    if (updateBookDto.authorsIds) {
      book.authors = authors;
    }
    
  }

  remove(id: number) {
    BookService.books = BookService.books.filter((b) => b.id != id);
    return true;
  }
}
