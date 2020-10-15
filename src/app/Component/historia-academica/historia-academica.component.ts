import { HistoriaAcademica } from './../../Model/historia-academica';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoriaControllerService } from 'src/app/Service/historia-controller.service';

@Component({
  selector: 'app-historia-academica',
  templateUrl: './historia-academica.component.html',
  styleUrls: ['./historia-academica.component.css']
})

export class HistoriaAcademicaComponent implements OnInit, OnDestroy {
  @Input() historiaAcademica: HistoriaAcademica;
  widthPage: number;
  mainSubscription: Subscription;

  constructor(private historiaController: HistoriaControllerService) { }

  ngOnInit(): void {
    this.mainSubscription = this.historiaController.resize$.subscribe(anchoPag => {
      this.widthPage = anchoPag;
      this.historiaController.onResize(anchoPag, document, 'academicaContainerFlex', 'academicaContainerBlock');
    });
  }

  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }
}
