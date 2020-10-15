import { DataSantiagoService } from './../../Service/data-santiago.service';
import { HistoriaControllerService } from './../../Service/historia-controller.service';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HistoriaLaboral } from 'src/app/Model/historia-laboral';

@Component({
  selector: 'app-historia-laboral',
  templateUrl: './historia-laboral.component.html',
  styleUrls: ['./historia-laboral.component.css']
})
export class HistoriaLaboralComponent implements OnInit, OnDestroy {
  historiasLaborales: HistoriaLaboral[];

  @Output() fechaIni: string;
  @Output() fechaFin: string;
  widthPage: number;
  mainSubscription: Subscription;

  constructor(private historiaController: HistoriaControllerService, private data: DataSantiagoService) {
    this.historiasLaborales = data.santiago.historiasLaborales;
  }

  ngOnInit(): void {
    this.mainSubscription = this.historiaController.resize$.subscribe(anchopag => {
      this.widthPage = anchopag;
      this.onResize(anchopag);
    });
  }

  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }

  private onResize(ancho: number) {

    if (ancho <= 1041) {
      const root = Array.from(document.getElementsByClassName('experienciaContainerFlex'));
      for (const item of root) {
        item.setAttribute('class', 'experienciaContainerBlock');
        const children = Array.from(item.childNodes) as Element[];
        this.historiaController.resizeDiv(children, 'style', 'width: 100%;');
      }
    }
    else {
      const root = Array.from(document.getElementsByClassName('experienciaContainerBlock'));
      for (const item of root) {
        item.setAttribute('class', 'experienciaContainerFlex');
        const children = Array.from(item.childNodes) as Element[];
        this.historiaController.resizeDiv(children, 'style', 'width: 40%;');
      }
    }
  }
}
