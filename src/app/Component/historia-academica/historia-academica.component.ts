import { HistoriaAcademica } from './../../Model/historia-academica';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia-academica',
  templateUrl: './historia-academica.component.html',
  styleUrls: ['./historia-academica.component.css']
})
export class HistoriaAcademicaComponent implements OnInit {
  @Input() historiaAcademica: HistoriaAcademica;
  constructor() { }

  ngOnInit(): void {
  }

}
