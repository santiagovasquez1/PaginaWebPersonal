import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaAcademicaComponent } from './historia-academica.component';

describe('HistoriaAcademicaComponent', () => {
  let component: HistoriaAcademicaComponent;
  let fixture: ComponentFixture<HistoriaAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaAcademicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
