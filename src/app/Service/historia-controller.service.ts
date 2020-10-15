import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriaControllerService {

  resize$ = new EventEmitter<number>();

  constructor(){}



  public resizeDiv(elementos: Element[], atributo: string, valorAtributo: string) {
    for (let elemento of elementos) {
      elemento.setAttribute(atributo, valorAtributo);
    }
  }
}
