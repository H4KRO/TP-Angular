import { Injectable } from '@angular/core';
import {Book} from "../../models/Book/book.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books : Book[] = []

  constructor() { }

  getBooks() : Book[] {
    return this.books;
  }

  deleteBook(bookToDelete : Book) : void {
    var tempBooks = []
    for(let book of this.books) {
      if (book.title != bookToDelete.title) {
        tempBooks.push(book)
      }
    }
    this.books = tempBooks
  }

  addBook(book: Book) : void {
    this.books.push(book)
  }
}
