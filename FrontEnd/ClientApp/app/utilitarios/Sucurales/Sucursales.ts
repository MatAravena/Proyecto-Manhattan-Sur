import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'sucursales',
    //templateUrl: './sucursales.component.html',
})

@Injectable()
export class sucursalesComponent {
    constructor(private http: HttpClient) {

        //http.get<PruebaJSon[]>("http://validate.jsontest.com/?json=%7B%22key%22:%22value%22").subscribe(result => {
        //    this.lstEje = result;
        //}, error => console.error(error));

        //http.get<PruebaJSon[]>("api/DataController/Index").subscribe(result => {
        //    this.lstEje = result;
        //}, error => console.error(error));
    }

    //called after the constructor and called  after the first ngOnChanges() 
    //ngOnInit() { }

    //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<Ejecutivos[]>(baseUrl + 'api/DataController/Index').subscribe(result => {
    //this.lstEje = result;
    //}, error => console.error(error));
    //}
}
