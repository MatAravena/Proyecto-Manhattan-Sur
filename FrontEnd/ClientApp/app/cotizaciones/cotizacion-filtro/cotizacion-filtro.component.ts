import { Component, OnInit } from '@angular/core';
import { ServicioCotizacion } from '../cotizacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cotizacion } from '../cotizacion.model';
import { RestService } from '../../rest.service';
import 'daterangepicker';
import 'jquery';
import 'select2';
import { log } from 'util';

@Component({
    selector: 'app-cotizacion-filtro',
    templateUrl: './cotizacion-filtro.component.html',
    styleUrls: ['./cotizacion-filtro.component.css']
})
export class CotizacionFiltroComponent implements OnInit {
    cotizacion: Cotizacion;
    filtro: Cotizacion = new Cotizacion();
    id: number;

    private sucursales: Array<object> = [];
    constructor(private servicioCotizacion: ServicioCotizacion,
        private route: ActivatedRoute,
        private router: Router,
        private api_Rest: RestService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            //this.cotizacion = this.servicioCotizacion.getCotizacion(this.id);
        });
        this.getSucursales();
    }

    public getSucursales() {
        this.api_Rest.getSucursales().subscribe((data: Array<object>) => {
            this.sucursales = data;
        });
    }

    onClearCotizaciones() {
        this.router.navigate(['/cotizaciones']);
    }

    public llenarFiltro() {
        console.log();
    }
}
