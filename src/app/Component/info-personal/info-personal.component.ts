import { Santiago } from './../../Model/santiago';
import { DataSantiagoService } from './../../Service/data-santiago.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoriaControllerService } from 'src/app/Service/historia-controller.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {

  santiago: Santiago;
  widthPage: number;
  mainSubscription: Subscription;

  constructor(public dataSantiago: DataSantiagoService, private historiaController: HistoriaControllerService) {
    this.santiago = dataSantiago.santiago;
  }

  ngOnInit(): void {
    this.mainSubscription = this.historiaController.resize$.subscribe(anchopag => {
      this.widthPage = anchopag;
      this.historiaController.onResize(anchopag, document, 'ResumenAptitudesFlex', 'ResumenAptitudesBlock');
    });
  }
}
