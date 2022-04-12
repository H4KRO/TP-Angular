import { Component, OnInit } from '@angular/core';
import {Author} from "../../models/Author/author.model";
import {AuthorsService} from "../../services/Authors/authors.service";

@Component({
  selector: 'app-display-authors',
  templateUrl: './display-authors.component.html',
  styleUrls: ['./display-authors.component.css']
})
export class DisplayAuthorsComponent implements OnInit {
  public newAuthorName: String = "";

  constructor(public authorsService: AuthorsService) {
  }

  ngOnInit(): void {
  }

  deleteAuthor(author: Author): void {
    this.authorsService.deleteAuthor(author)
  }

  createAuthor() {
    this.authorsService.addAuthor(new Author(this.newAuthorName))
  }
}
