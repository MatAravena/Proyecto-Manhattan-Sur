import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionVentanaComponent } from './cotizacion-ventana.component';

describe('CotizacionVentanaComponent', () => {
  let component: CotizacionVentanaComponent;
  let fixture: ComponentFixture<CotizacionVentanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionVentanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
