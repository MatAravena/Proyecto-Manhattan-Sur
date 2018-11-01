import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ServicioCotizacion } from '../cotizaciones/cotizacion.service';
import { Cotizacion } from '../cotizaciones/cotizacion.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private servicioCotizacion: ServicioCotizacion) {}

  guardarCotizaciones() {
    return this.http.put('url-servicio-cotizaciones', this.servicioCotizacion.getCotizaciones());
  }

  getCotizaciones() {
    this.http.get('url-servicio-cotizaciones')
      .map(
        (response: Response) => {
          const cotizaciones: Cotizacion[] = response.json();
          for (let cotizacion of cotizaciones) {
            if (!cotizacion['datos_cotizacion']) {
              cotizacion['datos_cotizacion'] = [];
            }
          }
          return cotizaciones;
        }
      )
      .subscribe(
        (cotizaciones: Cotizacion[]) => {
          this.servicioCotizacion.setCotizaciones(cotizaciones);
        }
      );
  }
}
