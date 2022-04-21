import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import {FormsModule} from "@angular/forms";
import {BooksService} from "./services/Books/books.service";
import {Author} from "./models/Author/author.model";
import {AuthorsService} from "./services/Authors/authors.service";
import { DisplayAuthorsComponent } from './components/display-authors/display-authors.component';
import {AuthService} from "./services/Auth/auth.service";
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayBooksComponent,
    DisplayAuthorsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BooksService, AuthorsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
