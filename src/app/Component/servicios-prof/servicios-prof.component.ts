import { ServicioProfesional } from './../../Model/servicio-profesional';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-prof',
  templateUrl: './servicios-prof.component.html',
  styleUrls: ['./servicios-prof.component.css']
})
export class ServiciosProfComponent implements OnInit {
  @Input() servicioProf: ServicioProfesional;
  constructor() { }

  ngOnInit(): void {
  }

}
