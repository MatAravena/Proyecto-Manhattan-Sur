import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionFiltroComponent } from './cotizacion-filtro.component';

describe('CotizacionFiltroComponent', () => {
  let component: CotizacionFiltroComponent;
  let fixture: ComponentFixture<CotizacionFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
