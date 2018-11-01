import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'sucursales',
    //templateUrl: './sucursales.component.html',
})

@Injectable({
    providedIn: 'root'
})
export class utilitariosComponent {
    private lstSucursales: Sucursal[];
    private http: HttpClient;

    constructor() {

        //http.get<PruebaJSon[]>("http://validate.jsontest.com/?json=%7B%22key%22:%22value%22").subscribe(result => {
        //    this.lstEje = result;
        //}, error => console.error(error));

        //http.get<PruebaJSon[]>("api/DataController/Index").subscribe(result => {
        //    this.lstEje = result;
        //}, error => console.error(error));
    }

    getSucursales() {
        this.http.get<Sucursal[]>("http://10.2.0.34/api/ComboList/Sucursal").subscribe(result => {
            this.lstSucursales = result;
        }, error => console.error(error));
    }

    //called after the constructor and called  after the first ngOnChanges() 
    //ngOnInit() { }

    //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<Ejecutivos[]>(baseUrl + 'api/DataController/Index').subscribe(result => {
    //this.lstEje = result;
    //}, error => console.error(error));
    //}

}

interface Sucursal {
    IdSucursal: string;
    Nombre: string;
}
