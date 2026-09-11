"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BookService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./entities/book.entity");
const author_service_1 = require("../author/author.service");
const genre_service_1 = require("../genre/genre.service");
let BookService = class BookService {
    static { BookService_1 = this; }
    authorService;
    genreService;
    constructor(authorService, genreService) {
        this.authorService = authorService;
        this.genreService = genreService;
    }
    static books = [];
    create(createBookDto) {
        const newBook = new book_entity_1.Book;
        const genre = this.genreService.findOne(createBookDto.genreId);
        console.log(genre);
        const authors = createBookDto.authorsIds.map((a) => this.authorService.findOne(a));
        console.log(authors);
        newBook.name = createBookDto.name;
        newBook.genre = genre;
        newBook.authors = authors;
        newBook.id = Math.random();
        BookService_1.books.push(newBook);
        return newBook.id;
    }
    findAll() {
        return BookService_1.books;
    }
    findOne(id) {
        const book = BookService_1.books.find((b) => b.id == id);
        if (!book) {
            throw new common_1.NotFoundException();
        }
        return book;
    }
    update(id, updateBookDto) {
        const book = BookService_1.books.find((b) => b.id == id);
        const genre = this.genreService.findOne(updateBookDto.genreId);
        const authors = updateBookDto.authorsIds.map((a) => this.authorService.findOne(a));
        if (!book) {
            throw new common_1.NotFoundException();
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
    remove(id) {
        BookService_1.books = BookService_1.books.filter((b) => b.id != id);
        return true;
    }
};
exports.BookService = BookService;
exports.BookService = BookService = BookService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [author_service_1.AuthorService, genre_service_1.GenreService])
], BookService);
//# sourceMappingURL=book.service.js.map