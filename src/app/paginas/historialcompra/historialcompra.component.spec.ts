import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialcompraComponent } from './historialcompra.component';

describe('HistorialcompraComponent', () => {
  let component: HistorialcompraComponent;
  let fixture: ComponentFixture<HistorialcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialcompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
