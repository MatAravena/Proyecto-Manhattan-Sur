import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    //REST_URL = 'http://100.100.2.69:81/WSLineasComerciales/api/ComboList/';
    REST_URL = 'http://whiteshark.cl/WSLineasComerciales/api/ComboList/Sucursal';
    constructor(private http: HttpClient) { }

    getSucursales() {
        return this.http.get(this.REST_URL + 'Sucursal' + '.php');


        //this.http.get<Bandeja[]>("api/CotizacionController/GetCotizaciones").subscribe(result => {
        //    this._bandeja = result;
        //}, error => console.error(error));
    }

    getGrupoRamo() {
        return this.http.get(this.REST_URL + 'GrupoRamos' + '.php');
    }

    getRamos() {
        return this.http.get(this.REST_URL + 'Ramos' + '.php');
    }

    getCompaniaRiesgo() {
        return this.http.get(this.REST_URL + 'CompaniaRiesgoActual' + '.php');
    }

    getMoneda() {
        return this.http.get(this.REST_URL + 'Moneda' + '.php');
    }

    getActividad() {
        return this.http.get(this.REST_URL + 'Actividad' + '.php');
    }

}
