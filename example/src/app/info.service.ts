import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private username: String = ""
  private password: String = ""
  constructor() { }
  public setUsername(username : String) : void {
    this.username = username
  }
  public setPassword(password : String) : void {
    this.password = password
  }
  public getUsername() : String {
    return this.username
  }
  public getPassword() : String {
    return this.password
  }
}
