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
  @Input() historiaLaboral: HistoriaLaboral;
  @Output() fechaIni: string;
  @Output() fechaFin: string;
  widthPage: number;
  mainSubscription: Subscription;

  constructor(private historiaController: HistoriaControllerService) {

  }

  ngOnInit(): void {
    this.mainSubscription = this.historiaController.resize$.subscribe(anchopag => {
      this.widthPage = anchopag;
      console.log('ancho pag' + anchopag);
      this.onResize(anchopag);
    });
  }

  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }

  private onResize(ancho: number) {
    if (ancho < 1041) {
      console.log('ancho pag menor que 1041');
      // document.getElementById('experiencia').setAttribute('class', 'experienciaContainerMobile');
      // document.getElementById('cargo').setAttribute('style', 'width: 100%;');
      // document.getElementById('descripcion').setAttribute('style', 'width: 100%;');
    }
    else {
      console.log('ancho pag mayor que 1041');
      // document.getElementById('experiencia').setAttribute('class', 'experienciaContainer');
      // document.getElementById('cargo').setAttribute('style', 'width: 40%;');
      // document.getElementById('descripcion').setAttribute('style', 'width: 40%;');
    }
  }
}
