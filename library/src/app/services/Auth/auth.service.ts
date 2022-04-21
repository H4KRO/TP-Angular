import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthorsService} from "../Authors/authors.service";
import {BooksService} from "../Books/books.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connected : boolean = false;
  private token : String = ""

  constructor(private http : HttpClient) { }

  login(username : string, password : string) : void {
    let body = new URLSearchParams();
    body.set('client_id', "login-app");
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', "password");

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    this.http
      .post<any>("/auth/realms/SpringBootKeycloak/protocol/openid-connect/token", body.toString(), options)
        .subscribe(response => {
          console.log(response)
            this.connected = true;
            this.token = response.access_token
        },
        (error) => {
          this.connected = false;
          this.token = ""
        });
  }

  public isConnected() : boolean {
    return this.connected;
  }

  public getToken() : String {
    return this.token
  }

  public logout() : void {
    this.connected = false;
    this.token = "";
  }
}
