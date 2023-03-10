import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTecnicoComponent } from './servicios-tecnico.component';

describe('ServiciosTecnicoComponent', () => {
  let component: ServiciosTecnicoComponent;
  let fixture: ComponentFixture<ServiciosTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
