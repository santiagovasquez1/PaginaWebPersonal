import { CursoCertificado } from './../../Model/curso-certificados';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent implements OnInit {
  @Input() certificado: CursoCertificado;
  constructor() { }

  ngOnInit(): void {
  }

}
