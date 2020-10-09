import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosProfComponent } from './servicios-prof.component';

describe('ServiciosProfComponent', () => {
  let component: ServiciosProfComponent;
  let fixture: ComponentFixture<ServiciosProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
