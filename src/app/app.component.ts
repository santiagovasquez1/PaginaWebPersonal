import { Santiago } from './Model/santiago';
import { DataSantiagoService } from './Service/data-santiago.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebPersonal';
  santiago: Santiago;
  constructor(public data: DataSantiagoService) {
    this.santiago = data.santiago;
  }
}
