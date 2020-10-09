import { ServicioProfesional } from './../Model/servicio-profesional';
import { CursoCertificado } from './../Model/curso-certificados';
import { HistoriaAcademica } from './../Model/historia-academica';
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
    this.santiago.serviciosProfesionales = [];

    this.generarReferencias();
    this.generarHistoriaLaboral();
    this.generarHistoriaAcademica();
    this.generarCertificado();
    this.generarServicioProf();

    this.santiago.cursosCertificado.sort((a, b) => (a.fechaFin < b.fechaFin ? -1 : 1));
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
    historia1.fechaIni = new Date('2020-01-01');
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
    historia4.fechaIni = new Date('2016-02-01');
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

  private generarHistoriaAcademica() {
    const academica1 = new HistoriaAcademica();
    academica1.carrera = 'Especialización en Ingeniería de Software';
    academica1.universidad = 'Universidad de Medellín';
    academica1.estado = 'Estudiante de posgrado';
    academica1.fechaIni = new Date('2020-02-02');
    academica1.fechaFin = new Date();
    academica1.descripcionPrograma.push('La Especialización en Ingeniería de Software se constituye en un programa de formación de alto nivel para contribuir a la solución de problemas propios del ámbito del desarrollo de software.');

    const academica2 = new HistoriaAcademica();
    academica2.carrera = 'Especialización en Estructuras';
    academica2.universidad = 'Universidad Nacional de Colombia';
    academica2.estado = 'Graduado';
    academica2.fechaIni = new Date('2016-02-02');
    academica2.fechaFin = new Date('2016-12-02');
    academica2.descripcionPrograma.push('El Programa de Especialización en Estructuras promoverá la profundización en el campo específico de la Ingeniería Estructural, y la ampliación del conocimiento en el comportamiento de los materiales, métodos de análisis y diseño y nuevos sistemas de construcción.');

    const academica3 = new HistoriaAcademica();
    academica3.carrera = 'Ingeniería Civil';
    academica3.universidad = 'Universidad Nacional de Colombia';
    academica3.estado = 'Graduado';
    academica3.fechaIni = new Date('2010-02-02');
    academica3.fechaFin = new Date('2015-12-30');
    academica3.descripcionPrograma.push('El Programa Curricular de Ingeniería Civil tiene como misión formar ingenieros que sean capaces de dar solución a los problemas nacionales y regionales.');

    this.insertarHistoriaAcademica(academica1);
    this.insertarHistoriaAcademica(academica2);
    this.insertarHistoriaAcademica(academica3);
  }

  private generarServicioProf() {
    const servicio1 = new ServicioProfesional();
    servicio1.tipoServ = 'Diseño estructural';
    servicio1.descripcion = 'Se ofrece el diseño estructural con el fin de dar soluciones optimas que se ajusten a las necesidades de cada proyecto.';
    servicio1.urlServicio = '../../assets/images/servicios/disenioEst.jpg';

    const servicio2 = new ServicioProfesional();
    servicio2.tipoServ = 'Desarrollo de Software a la medida';
    servicio2.descripcion = ' Se ofrece el desarrollo de software a la medida especializada en  el área de la ingeniería civil, basado en las necesidades particulares del cliente, buscando asi optimizar y automatizar procesos dentro de la compañía.';
    servicio2.urlServicio = '../../assets/images/servicios/desarrolloSoftware.jpg';

    const servicio3 = new ServicioProfesional();
    servicio3.tipoServ = 'Revisión de diseños estructurales';
    servicio3.descripcion = 'Se ofrece la revisión estructural de los diseños estructurales para verificar que estos cumplan con las leyes y normas de construcción vigentes.';
    servicio3.urlServicio = '../../assets/images/servicios/RevisionEstructural.jpg';

    this.insertarServicio(servicio1);
    this.insertarServicio(servicio2);
    this.insertarServicio(servicio3);
  }

  private generarCertificado() {
    const Curso1 = new CursoCertificado();
    Curso1.institucion = 'Platzi';
    Curso1.curso = 'asp.net core';
    Curso1.fechaFin = new Date('2020-01-18');
    Curso1.urlImagen = '../../assets/images/certificados/diploma-aspnet-core_page-0001.jpg';

    const curso2 = new CursoCertificado();
    curso2.institucion = 'Platzi';
    curso2.curso = 'Básico de javascript';
    curso2.fechaFin = new Date('2020-04-23');
    curso2.urlImagen = '../../assets/images/certificados/diploma-basico-javascript_page-0001.jpg';

    const curso3 = new CursoCertificado();
    curso3.institucion = 'Platzi';
    curso3.curso = 'C# con .Net core';
    curso3.fechaFin = new Date('2020-01-13');
    curso3.urlImagen = '../../assets/images/certificados/diploma-c-sharp_page-0001.jpg';

    const curso4 = new CursoCertificado();
    curso4.institucion = 'Platzi';
    curso4.curso = 'Bases de datos en aws';
    curso4.fechaFin = new Date('2020-04-02');
    curso4.urlImagen = '../../assets/images/certificados/diploma-db-aws_page-0001.jpg';

    const curso5 = new CursoCertificado();
    curso5.institucion = 'Platzi';
    curso5.curso = 'Programación Básica';
    curso5.fechaFin = new Date('2020-01-01');
    curso5.urlImagen = '../../assets/images/certificados/diploma-programacion-basica_page-0001.jpg';

    const curso6 = new CursoCertificado();
    curso6.institucion = 'Platzi';
    curso6.curso = 'Sql y MySql';
    curso6.fechaFin = new Date('2020-03-16');
    curso6.urlImagen = '../../assets/images/certificados/diploma-sql-mysql_page-0001.jpg';

    const curso7 = new CursoCertificado();
    curso7.institucion = 'Platzi';
    curso7.curso = 'introducción a terminal y linea de comandos';
    curso7.fechaFin = new Date('2019-11-03');
    curso7.urlImagen = '../../assets/images/certificados/diploma-terminal-2019_page-0001.jpg';

    const curso8 = new CursoCertificado();
    curso8.institucion = 'Platzi';
    curso8.curso = 'Xamarin.Forms';
    curso8.fechaFin = new Date('2020-02-05');
    curso8.urlImagen = '../../assets/images/certificados/diploma-xamarin-forms_page-0001.jpg';

    this.insertarCertificado(Curso1);
    this.insertarCertificado(curso2);
    this.insertarCertificado(curso3);
    this.insertarCertificado(curso4);
    this.insertarCertificado(curso5);
    this.insertarCertificado(curso6);
    this.insertarCertificado(curso7);
    this.insertarCertificado(curso8);

  }

  public insertarReferencia(referencia: Persona) {
    this.santiago.referenciasLaborales.push(referencia);
  }

  public insertarHistoria(historiaLaboral: HistoriaLaboral) {
    this.santiago.historiasLaborales.push(historiaLaboral);
  }

  public insertarHistoriaAcademica(historiaAcademica: HistoriaAcademica) {
    this.santiago.historiasAcademicas.push(historiaAcademica);
  }

  public insertarCertificado(certificado: CursoCertificado) {
    this.santiago.cursosCertificado.push(certificado);
  }

  public insertarServicio(servicioProfesional: ServicioProfesional) {
    this.santiago.serviciosProfesionales.push(servicioProfesional);
  }
}
