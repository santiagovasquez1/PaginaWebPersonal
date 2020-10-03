import { ReferenciaPersonal } from './../Model/referencia-personal';
import { HistoriaLaboral } from './../Model/historia-laboral';
import { Santiago } from './../Model/santiago';
import { Injectable } from '@angular/core';
import { Persona } from '../Model/persona';

@Injectable({
  providedIn: 'root'
})
export class DataSantiagoService {

  santiago: Santiago;

  constructor() {
    this.santiago = new Santiago('Santiago Vásquez Gómez', '310 4509399', 'Especialista en Estructuras');
    this.santiago.correo = 'santivasquez1@gmail.com';
    this.santiago.empresa = 'Independiente';

    this.santiago.resumenPersonal = 'Ingeniero Civil de la Universidad Nacional de Colombia, especialista en análisis, ' +
      'diseño y revisión de estructura, con altos conocimiento en desarrollo de software especificio para el diseño estructural. ' +
      'Actualmente estudiante del postgrado en desarrollo de software en la Universidad de Medellin.';

    this.santiago.aptitudes = ['Una persona responsable e inteligente',
      'Persistente', 'Confiable',
      'Desarrollo de software',
      'Resolución de problemas',
      'Desarrollo de software a la medida para el área de ingeniería civil',
      'Especialista en diseño estructural de edificaciones en concreto',
      'Desarrollo de software básico'
    ];

    this.santiago.referenciasLaborales = [];
    this.santiago.historiasAcademicas = [];
    this.santiago.cursosCertificado = [];

    this.generarReferencias();
    this.generarHistoriaLaboral();
  }

  private generarReferencias() {

    const referencia1 = new ReferenciaPersonal('Orlando Giraldo Bolivar', '314 7937741', 'Especialista en Estructuras');
    referencia1.empresa = 'Universidad Nacional de Colombia Sede Medellín';
    referencia1.cargo = 'Profesor de diseño de estructuras de concreto';

    this.insertarReferencia(referencia1);

    const referencia2 = new ReferenciaPersonal('Andrés Mauricio Bernal', '314 6307427', 'Especialista en ingeniería Sismo-Resistente');
    referencia2.cargo = 'Gerente';
    referencia2.empresa = 'Efe prima Ce S.A.S';

    this.insertarReferencia(referencia2);
  }

  private generarHistoriaLaboral() {

    const historia1 = new HistoriaLaboral();
    historia1.cargo = 'Desarrollador de software';
    historia1.empresa = 'Independiente';
    historia1.fechaIni = new Date('2020-06-01');
    historia1.fechaFin = new Date();

    historia1.funcionesCargo.push('Desarrollo de aplicación de' +
      'escritorio, para el diseño y dibujo' +
      'automático en Autocad de edificios de' +
      'muros de concreto para la empresa A&G' +
      'Proyectos de Ingeniería S.A.S' +
      'Proyectos de Ingeniería S.A.S. Software desarrollado en' +
      'C# y Telerik UI Forms según arquitectura' +
      'MVC, base de datos en MySql.');



  }

  public insertarReferencia(referencia: Persona) {
    this.santiago.referenciasLaborales.push(referencia);
  }

  public insertarHIstoria(historiaLaboral: HistoriaLaboral) {
    this.santiago.historiasLaborales.push(historiaLaboral);
  }
}
