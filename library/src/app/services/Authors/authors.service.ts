import { Injectable } from '@angular/core';
import {Author} from "../../models/Author/author.model";
import {Book} from "../../models/Book/book.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authors : Author[] = []

  constructor() { }

  public getAuthor(authorName: String) : Author {
    for(let author of this.authors) {
      if(author.name == authorName) {
        return author
      }
    }
    let newAuthor = new Author(authorName)
    this.addAuthor(newAuthor)
    return newAuthor
  }

  public getAuthors() : Author[] {
    return this.authors;
  }

  deleteAuthor(authorToDelete : Author) : void {
    var tempAuthors = []
    for(let author of this.authors) {
      if (author.name != authorToDelete.name) {
        tempAuthors.push(author)
      }
    }
    this.authors = tempAuthors
  }

  addAuthor(author: Author) {
    this.authors.push(author)
  }
}
