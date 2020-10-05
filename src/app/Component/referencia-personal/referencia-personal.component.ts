import { ReferenciaPersonal } from './../../Model/referencia-personal';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-referencia-personal',
  templateUrl: './referencia-personal.component.html',
  styleUrls: ['./referencia-personal.component.css']
})
export class ReferenciaPersonalComponent implements OnInit {

  @Input() refPersonal: ReferenciaPersonal;
  constructor() { }

  ngOnInit(): void {
  }

}
