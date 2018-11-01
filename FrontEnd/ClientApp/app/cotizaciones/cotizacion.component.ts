import { Component, OnInit, ViewChild } from '@angular/core';
import { CotizacionDetalleComponent } from './cotizacion-detalle/cotizacion-detalle.component';
import { CotizacionFiltroComponent } from './cotizacion-filtro/cotizacion-filtro.component';
import { Cotizacion } from './cotizacion.model';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css'],
})
export class CotizacionComponent implements OnInit {
    @ViewChild(CotizacionDetalleComponent) detalle: CotizacionDetalleComponent;
    @ViewChild(CotizacionFiltroComponent) filtro: CotizacionFiltroComponent;
  constructor() { }
    estado = 'hidden';
    

  ngOnInit() {
  }

  onBuscarCotizacion() {
    this.estado === 'hidden' ? this.estado = 'visible' : this.estado = 'hidden';
  }

}


