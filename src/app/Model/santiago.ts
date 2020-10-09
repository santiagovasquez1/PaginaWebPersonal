import { ServicioProfesional } from './servicio-profesional';
import { CursoCertificado } from './curso-certificados';
import { HistoriaAcademica } from './historia-academica';
import { HistoriaLaboral } from './historia-laboral';
import { Persona } from './persona';

export class Santiago extends Persona {

  resumenPersonal: string;
  aptitudes: string[];
  referenciasLaborales: Persona[];
  historiasLaborales: HistoriaLaboral[];
  historiasAcademicas: HistoriaAcademica[];
  cursosCertificado: CursoCertificado[];
  serviciosProfesionales: ServicioProfesional[];
}
