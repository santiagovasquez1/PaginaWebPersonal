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
      this.historiaController.onResize(anchopag, document, 'experienciaContainerFlex', 'experienciaContainerBlock');
    });
  }

  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }
}
