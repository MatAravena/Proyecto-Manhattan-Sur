import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Cotizacion } from '../cotizacion.model';
import { Bandeja } from '../../shared/models/bandeja.module';
import { ServicioCotizacion } from '../cotizacion.service';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-cotizacion-detalle',
    templateUrl: './cotizacion-detalle.component.html',
    styleUrls: ['./cotizacion-detalle.component.css']
})

export class CotizacionDetalleComponent implements OnInit, OnDestroy {
    cotizaciones: Bandeja[];
    subscripcion: Subscription;
    //private coti: Cotizacion = new Cotizacion();

    constructor(private servicioCotizacion: ServicioCotizacion,
        private router: Router,
        private route: ActivatedRoute
        //,private _data: DataService
    ) {
    }

    ngOnInit() {
        this.subscripcion = this.servicioCotizacion._bandejaCambio
            .subscribe(
                (cotizaciones: Bandeja[]) => {
                    this.cotizaciones = cotizaciones;
                }
            );
        this.cotizaciones = this.servicioCotizacion.getCotizaciones();

        //this._data._filtros.subscribe(coti => this.coti = coti);
    }
  //onAgregarDataCampos() {
  //  this.servicioCotizacion.agregarDataCampos(this.cotizacion.datos_cotizacion);
  //}

    //SetGrid() 0 {
    //    this.cotizaciones = this.servicioCotizacion.getCotizaciones();
    //}
    //onAgregarDataCampos() {
    //  this.servicioCotizacion.agregarDataCampos(this.cotizacion.datos_cotizacion);
    //}
  onEditarCotizacion() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
    

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
    this.router.navigate(['/cotizaciones']);
  }
    

}
