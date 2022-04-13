import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book/book.model";
import {Router} from "@angular/router";
import {BooksService} from "../../services/Books/books.service";
import {Author} from "../../models/Author/author.model";
import {AuthorsService} from "../../services/Authors/authors.service";

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  public books : Book[] = []
  public newTitle : String = "";
  public newAuthorName : String = ""
  public newCategory: String = "";

  constructor(public router : Router, public booksService : BooksService, private authorsService : AuthorsService) { }

  ngOnInit(): void {  }

  public createBook(): void {
    this.booksService.addBook(new Book(this.newTitle, this.newAuthorName, this.newCategory))
  }

  public deleteBook(book : Book) : void {
    this.booksService.deleteBook(book)
  }

  public updateBook(book : Book) : void {
    this.booksService.updateBook(book);
  }

}
