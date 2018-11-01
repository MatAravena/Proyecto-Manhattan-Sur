import { Component, OnInit, Input } from '@angular/core';

import { Cotizacion } from '../../cotizacion.model';

@Component({
  selector: 'app-cotizacion-item',
  templateUrl: './cotizacion-item.component.html',
  styleUrls: ['./cotizacion-item.component.css']
})
export class CotizacionItemComponent implements OnInit {
  @Input() cotizacion: Cotizacion;
  @Input() index: number;

  ngOnInit() {
  }
}
