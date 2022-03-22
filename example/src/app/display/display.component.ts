import { Component, OnInit } from '@angular/core';
import {InfoService} from "../info.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public username : String = ""
  public password : String = ""
  private infoService : InfoService
  constructor(infoService: InfoService) {
    this.infoService = infoService
  }

  ngOnInit(): void {
    this.username = this.infoService.getUsername()
    this.password = this.infoService.getPassword()
  }

}
