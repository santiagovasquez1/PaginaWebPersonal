import { Santiago } from './../../Model/santiago';
import { DataSantiagoService } from './../../Service/data-santiago.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {

  santiago: Santiago;
  constructor(public dataSantiago: DataSantiagoService) {
    this.santiago = dataSantiago.santiago;
  }

  ngOnInit(): void {
  }

}
