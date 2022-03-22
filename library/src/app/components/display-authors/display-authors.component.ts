import { Component, OnInit } from '@angular/core';
import {Author} from "../../models/Author/author.model";
import {AuthorsService} from "../../services/Authors/authors.service";

@Component({
  selector: 'app-display-authors',
  templateUrl: './display-authors.component.html',
  styleUrls: ['./display-authors.component.css']
})
export class DisplayAuthorsComponent implements OnInit {
  public authors: Author[] = [];
  public newAuthorName: String = "";

  constructor(private authorsService : AuthorsService) { }

  ngOnInit(): void {
    this.refresh()
  }

  deleteAuthor(author: Author) : void {
    this.authorsService.deleteAuthor(author)
    this.refresh()
  }

  createAuthor() {
    this.authorsService.addAuthor(new Author(this.newAuthorName))
    this.refresh()
  }

  refresh() : void {
    this.authors = this.authorsService.getAuthors()
  }
}
