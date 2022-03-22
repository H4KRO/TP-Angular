import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayBooksComponent} from "./components/display-books/display-books.component";
import {DisplayAuthorsComponent} from "./components/display-authors/display-authors.component";

const routes: Routes = [
  {
    path: 'displayBooks',
    component: DisplayBooksComponent
  },
  {
    path: 'displayAuthors',
    component: DisplayAuthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
