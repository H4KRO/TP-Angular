import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/Auth/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username : string = "";
  public password : string = "";

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

}
