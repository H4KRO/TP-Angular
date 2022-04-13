import {Author} from "../Author/author.model";

export class Book {
  public id : Number = -1;
  constructor(
    public title : String,
    public author : String,
    public category : String
  ) { }
}
