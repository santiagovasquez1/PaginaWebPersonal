import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaLaboralComponent } from './historia-laboral.component';

describe('HistoriaLaboralComponent', () => {
  let component: HistoriaLaboralComponent;
  let fixture: ComponentFixture<HistoriaLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
