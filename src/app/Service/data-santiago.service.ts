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
      'diseño y revisión de estructura, con altos conocimiento en desarrollo de software específico para el diseño estructural. ' +
      'Actualmente estudiante del postgrado en desarrollo de software en la Universidad de Medellín.';

    this.santiago.aptitudes = ['Una persona responsable e inteligente',
      'Persistente', 'Confiable',
      'Resolución de problemas',
      'Desarrollo de software a la medida para el área de ingeniería civil',
      'Especialista en diseño estructural de edificaciones en concreto',
    ];

    this.santiago.referenciasLaborales = [];
    this.santiago.historiasLaborales = [];
    this.santiago.historiasAcademicas = [];
    this.santiago.cursosCertificado = [];

    this.generarReferencias();
    this.generarHistoriaLaboral();
  }

  private generarReferencias() {

    const referencia1 = new ReferenciaPersonal('Orlando Giraldo Bolívar', '314 7937741', 'Especialista en Estructuras');
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

    historia1.funcionesCargo.push('Desarrollo de aplicación de ' +
      'escritorio, para el diseño y dibujo ' +
      'automático en Autocad de edificios de ' +
      'muros de concreto para la empresa A&G ' +
      'Proyectos de Ingeniería S.A.S ' +
      'Software desarrollado en ' +
      'C# y Telerik UI Forms según arquitectura ' +
      'MVC, base de datos en MySql.');

    historia1.funcionesCargo.push('Desarrollo de aplicación web para el diseño de zapatas aisladas, según la norma sismo resistente colombiana NSR10 ' +
      'Proyecto desarrollado con TypeScript y javaScript con el framework de angular');


    const historia2 = new HistoriaLaboral();
    historia2.cargo = 'Coordinador de desarrollo de software';
    historia2.empresa = 'Efe prima Ce S.A.S';
    historia2.fechaIni = new Date('2018-06-01');
    historia2.fechaFin = new Date('2019-12-27');

    historia2.funcionesCargo.push('Coordinación de desarrollo de software para el diseño y dibujo automático en AutoCad de edificios de muros de concreto. Software desarrollado en C# y Windows Forms según ' +
      'arquitectura MVC, base de datos en MySql.');

    historia2.funcionesCargo.push('Coordinación de desarrollo de software para el diseño y dibujo automático en AutoCad de edificios aporticados en concreto. Software desarrollado en C# y ' +
      'Windows Forms según arquitectura MVC, base de datos en MySql.');

    historia2.funcionesCargo.push('Probar la solución de tecnologías de la información y las comunicaciones de acuerdo con herramientas de desarrollo, procedimientos y parámetros técnicos.');

    historia2.funcionesCargo.push('Establecer requisitos de la solución de tecnologías de la información y las comunicaciones de acuerdo con estándares y procedimiento técnico.');

    const historia3 = new HistoriaLaboral();
    historia3.cargo = 'Desarrollador de software';
    historia3.empresa = 'Efe prima Ce S.A.S';
    historia3.fechaIni = new Date('2017-06-01');
    historia3.fechaFin = new Date('2019-12-27');

    historia3.funcionesCargo.push('Desarrollo de software para el diseño y dibujo automático en AutoCad de edificios de muros de concreto. Software desarrollado en C# y Windows Forms según arquitectura ' +
      'MVC, base de datos en MySql.');
    historia3.funcionesCargo.push('Desarrollo de software para automatizar el proceso de modelamiento de estructuras de concreto en ETABS. Software desarrollado en C# y Windows Forms según arquitectura MVC, ' +
      'base de datos en MySql.');
    historia3.funcionesCargo.push('Desarrollo de software en Java para el cálculo de consumo de materiales aproximado en estructuras de concreto.');
    historia3.funcionesCargo.push('Integrar datos de acuerdo con técnicas de visualización y metodologías de análisis.');

    const historia4 = new HistoriaLaboral();
    historia4.cargo = 'Diseñador estructural';
    historia4.empresa = 'Efe prima Ce S.A.S';
    historia4.fechaIni = new Date('2017-06-01');
    historia4.fechaFin = new Date('2019-12-27');

    historia4.funcionesCargo.push('Diseño Estructural de Plataforma de parqueaderos de 8 niveles en pórticos resistentes a momento para el proyecto Ciprés Mosquera, Cundinamarca.');
    historia4.funcionesCargo.push('Participación en el diseño estructural de cuatro torres de 9 niveles en pórticos resistentes a momento para la urbanización Acqua Chía, Cundinamarca.')
    historia4.funcionesCargo.push('Diseño estructural de una torre de 13 niveles (6208.8 m²) en muros de concreto y mampostería estructural, para el proyecto Boreal-La prosperidad Madrid, Cundinamarca.');
    historia4.funcionesCargo.push('Diseño estructural de una torre de 12 niveles (4008 m²) en muros de concreto y mampostería estructural, para el proyecto Siena - La Toscana Zipaquirá Cundinamarca.');
    historia4.funcionesCargo.push('Diseño estructural de plataforma de parqueaderos de 4 niveles (5406.9 m²) en pórticos resistentes a momentos, Porto américas Bogotá Cundinamarca.');
    historia4.funcionesCargo.push('Participación en el Diseño estructural de una torre de 28 niveles (13100 m²) en muros estructurales de Concreto, para el proyecto Porto américas Bogotá Cundinamarca.');
    historia4.funcionesCargo.push('Diseño estructural de una torre de 13 niveles (6997.4 m²) en muros de concreto y mampostería estructural, para el proyecto Ciprés Mosquera, Cundinamarca.');
    historia4.funcionesCargo.push('Diseño estructural de una torre de 12 niveles (5790 m²) en muros de concreto y mampostería estructural, para el proyecto Canelo Mosquera, Cundinamarca.');
    historia4.funcionesCargo.push('Diseño estructural de una torre de 20 niveles en muros de concreto estructural para el proyecto Mediterránea, Bello, Antioquia.');
    historia4.funcionesCargo.push('Diseño estructural de una torre de 17 niveles (6814 m²) en muros de concreto estructural, para el proyecto la Quinta, Manizales, Caldas.');
    historia4.funcionesCargo.push('Diseño estructural de torre de 18 niveles en muros de concreto y mampostería para el proyecto Mirador de Fontibón Bogotá, Cundinamarca.');
    historia4.funcionesCargo.push('Diseño estructural torre de 12 niveles en muros de concreto y mampostería estructural, para el proyecto Guayacán en Mosquera, Cundinamarca.');


    this.insertarHistoria(historia1);
    this.insertarHistoria(historia2);
    this.insertarHistoria(historia3);
    this.insertarHistoria(historia4);
  }

  public insertarReferencia(referencia: Persona) {
    this.santiago.referenciasLaborales.push(referencia);
  }

  public insertarHistoria(historiaLaboral: HistoriaLaboral) {
    this.santiago.historiasLaborales.push(historiaLaboral);
  }
}
