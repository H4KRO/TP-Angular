import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public username : String = ""
  public password : String = ""
  private infoService : InfoService
  constructor(private router: Router, infoService: InfoService) {
    this.infoService = infoService
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    this.infoService.setUsername(this.username)
    this.infoService.setPassword(this.password)
    this.router.navigate(["/display"])
  }

}
