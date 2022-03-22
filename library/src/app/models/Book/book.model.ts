import {Author} from "../Author/author.model";

export class Book {
  constructor(
    public title : String,
    public author : Author,
    public category : String
  ) { }
}
