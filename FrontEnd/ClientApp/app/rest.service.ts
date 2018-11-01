import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  REST_URL = 'http://100.100.2.69:81/WSLineasComerciales/api/ComboList/';
  constructor(private http: HttpClient) { }

    getSucursales(){
        return this.http.get(this.REST_URL + 'Sucursal');
    }

    getGrupoRamo(){
        return this.http.get(this.REST_URL + 'GrupoRamos');
    }

    getRamos(){
        return this.http.get(this.REST_URL + 'Ramos');
    }

    getCompaniaRiesgo(){
        return this.http.get(this.REST_URL + 'CompaniaRiesgoActual');
    }

    getMoneda() {
        return this.http.get(this.REST_URL + 'Moneda');   
    }

    getActividad() {
        return this.http.get(this.REST_URL + 'Actividad');
    }

}
