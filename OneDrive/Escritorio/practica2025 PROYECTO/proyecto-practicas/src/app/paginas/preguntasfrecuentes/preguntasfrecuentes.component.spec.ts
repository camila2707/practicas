import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasfrecuentesComponent } from './preguntasfrecuentes.component';

describe('PreguntasfrecuentesComponent', () => {
  let component: PreguntasfrecuentesComponent;
  let fixture: ComponentFixture<PreguntasfrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasfrecuentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasfrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
