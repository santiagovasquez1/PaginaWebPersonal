import { Component, Input, OnInit, Output } from '@angular/core';
import { HistoriaLaboral } from 'src/app/Model/historia-laboral';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-historia-laboral',
  templateUrl: './historia-laboral.component.html',
  styleUrls: ['./historia-laboral.component.css']
})
export class HistoriaLaboralComponent implements OnInit {
  @Input() historiaLaboral: HistoriaLaboral;
  @Output() fechaIni: string;
  @Output() fechaFin: string;

  constructor() {

  }

  ngOnInit(): void {

  }


}
