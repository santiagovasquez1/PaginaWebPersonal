import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriaControllerService {

  resize$ = new EventEmitter<number>();

  constructor() { }

  public onResize(ancho: number, myDocument: Document, flexContainer: string, blockContainer: string) {
    if (ancho <= 1080) {
      const root = Array.from(myDocument.getElementsByClassName(flexContainer));
      for (const item of root) {
        item.setAttribute('class', blockContainer);
        const children = Array.from(item.childNodes) as Element[];
        this.resizeDiv(children, 'style', 'width: 100%;');
      }
    }
    else {
      const root = Array.from(myDocument.getElementsByClassName(blockContainer));
      for (const item of root) {
        item.setAttribute('class', flexContainer);
        const children = Array.from(item.childNodes) as Element[];
        this.resizeDiv(children, 'style', 'width: 40%;');
      }
    }
  }

  private resizeDiv(elementos: Element[], atributo: string, valorAtributo: string) {
    for (let elemento of elementos) {
      elemento.setAttribute(atributo, valorAtributo);
    }
  }
}
