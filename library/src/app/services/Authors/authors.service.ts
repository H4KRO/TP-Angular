import { Injectable } from '@angular/core';
import {Author} from "../../models/Author/author.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authors : Author[] = []

  constructor(private http : HttpClient) {
    this.http.get<Author[]>("/api/authors")
      .subscribe(
        (response) => {
          this.authors = response;
        }
      )
  }

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
    this.http.delete("/api/authors/" + authorToDelete.id)
      .subscribe(
        (response) => {
          var tempAuthors = []
          for(let author of this.authors) {
            if (author.id != authorToDelete.id) {
              tempAuthors.push(author)
            }
          }
          this.authors = tempAuthors
        }
      )
  }

  addAuthor(author: Author) {
    this.http.post<Author>("/api/authors", author)
      .subscribe(
        (response) => {
          this.authors.push(response)
        }
      )
  }

  updateAuthor(author: Author) {
    this.http.patch<Author>("/api/authors/" + author.id, author)
      .subscribe(
        (response) => {}
      )
  }
}
