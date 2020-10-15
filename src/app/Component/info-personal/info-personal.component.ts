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
      this.onResize(anchopag);
    });
  }

  private onResize(ancho: number) {
    if (ancho <= 1041) {
      const root = Array.from(document.getElementsByClassName('ResumenAptitudesFlex'));
      for (const item of root) {
        item.setAttribute('class', 'ResumenAptitudesBlock');
        const children = Array.from(item.childNodes) as Element[];
        this.historiaController.resizeDiv(children, 'style', 'width: 100%;');
      }
    }
    else {
      const root = Array.from(document.getElementsByClassName('ResumenAptitudesBlock'));
      for (const item of root) {
        item.setAttribute('class', 'ResumenAptitudesFlex');
        const children = Array.from(item.childNodes) as Element[];
        this.historiaController.resizeDiv(children, 'style', 'width: 40%;');
      }
    }
  }

}
