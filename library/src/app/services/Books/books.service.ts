import { Injectable } from '@angular/core';
import {Book} from "../../models/Book/book.model";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../Auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books : Book[] = []

  constructor(private http : HttpClient, private authSerice : AuthService) {
    this.load();
  }

  public load() : void {
    console.log("LOAD !")
    if(!this.authSerice.isConnected()) {
      return;
    }
    this.http.get<Book[]>("/api/books")
      .subscribe(
        (response) => {
          this.books = response;
        }
      )
  }

  getBooks() : Book[] {
    return this.books;
  }

  deleteBook(bookToDelete : Book) : void {
    this.http.delete("/api/books/" + bookToDelete.id)
      .subscribe(
        (response) => {
          var tempAuthors = []
          for(let book of this.books) {
            if (book.id != bookToDelete.id) {
              tempAuthors.push(book)
            }
          }
          this.books = tempAuthors
        }
      )
  }

  addBook(book: Book) : void {
    this.http.post("/api/books", book)
      .subscribe(
        (response) => {
          this.books.push(book)
        }
      )
  }

  updateBook(book: Book) {
    this.http.patch<Book>("/api/books/" + book.id, book)
      .subscribe(
        (response) => {}
      )
  }
}
