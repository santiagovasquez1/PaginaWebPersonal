import { Santiago } from './../../Model/santiago';
import { DataSantiagoService } from './../../Service/data-santiago.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent implements OnInit {

  santiago: Santiago;
  constructor(public dataService: DataSantiagoService) {
    this.santiago = dataService.santiago;
  }

  ngOnInit(): void {
  }

}
