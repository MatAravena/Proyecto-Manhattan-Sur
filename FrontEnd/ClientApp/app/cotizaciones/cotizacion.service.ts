import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Cotizacion } from './cotizacion.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Bandeja } from '../shared/models/bandeja.module';

@Injectable()
export class ServicioCotizacion implements OnInit {
    _bandejaCambio = new Subject<Bandeja[]>();
    _filtros = this._bandejaCambio.asObservable();
    _bandeja: Bandeja[];
    cotizaciones: Cotizacion[];
    cotizacionCambio = new Subject<Cotizacion[]>();;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<Bandeja[]>("api/CotizacionController/GetCotizaciones").subscribe(result => {
            this._bandeja = result;
        }, error => console.error(error));
    }

    setCotizaciones(cotizaciones: Cotizacion[]) {
        this.cotizaciones = cotizaciones;
        this.cotizacionCambio.next(this.cotizaciones.slice());
    }

    actualizarCotizaciones(filtros: Cotizacion) {
        // Send cotizaciones with filters
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let params = new HttpParams().set("cliente", filtros.cliente)
            .set("estado", filtros.estado)
            .set("fecha_cotizacion", filtros.fecha_cotizacion)
            .set("nro_cotizacion", filtros.nro_cotizacion)
            .set("sucursal", filtros.sucursal);

        JSON.stringify(filtros);

        //this.http.post("api/CotizacionController/GetCotizacionesRutCli", JSON.stringify(cotizaciones)).subscribe(result => {
        this.http.post<Bandeja[]>("api/CotizacionController/GetCotizacionesRutCli", { Filtros: params }).subscribe(result => {
            //this.http.get<Bandeja[]>('$api/CotizacionController/GetCotizacionesRutCli/${' + cotizaciones.cliente + '}').subscribe(result => {
            this._bandeja = result;
        }, error => console.error(error));

        //this.http.post<Bandeja[]>("api/CotizacionController/GetCotizacionesRutCli", { params: JSON.stringify(cotizaciones.cliente) }).subscribe(result => {
        //    //this.http.get<Bandeja[]>('$api/CotizacionController/GetCotizacionesRutCli/${' + cotizaciones.cliente + '}').subscribe(result => {
        //    this._bandeja = result;
        //}, error => console.error(error));

        this._bandejaCambio.next(this._bandeja.slice());
    }

    getCotizaciones() {
        if (typeof this._bandeja === 'undefined') {
            this.http.get<Bandeja[]>("api/CotizacionController/GetCotizaciones").subscribe(result => {
                this._bandeja = result;
            }, error => console.error(error));
        }
        return this._bandeja.slice();
    }

    getCotizacion(index: number) {
        return this._bandeja[index];
    }

    // agregarDataCampos(datos_cotizacion: Dato_Cotizacion[]) {
    //   this.slService.agregarCampos(datos_cotizacion);
    // }
    //agregarCotizacion(cotizacion: Cotizacion) {

    //    this.cotizaciones.push(cotizacion);
    //    this.cotizacionCambio.next(this.cotizaciones.slice());
    //}
    //actualizarCotizacion(index: number, nuevaCotizacion: Cotizacion) {
    //    this.cotizaciones[index] = nuevaCotizacion;
    //    this.cotizacionCambio.next(this.cotizaciones.slice());
    //}
    //borrarCotizacion(index: number) {
    //    this.cotizaciones.splice(index, 1);
    //    this.cotizacionCambio.next(this.cotizaciones.slice());
    //}

}
