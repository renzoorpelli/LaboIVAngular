import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioEdadComponent } from './ejercicio-edad.component';

describe('EjercicioEdadComponent', () => {
  let component: EjercicioEdadComponent;
  let fixture: ComponentFixture<EjercicioEdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioEdadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
