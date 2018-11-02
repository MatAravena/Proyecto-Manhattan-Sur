var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpParams } from '@angular/common/http';
var ServicioCotizacion = /** @class */ (function () {
    function ServicioCotizacion(http) {
        this.http = http;
        this._bandejaCambio = new Subject();
        this._filtros = this._bandejaCambio.asObservable();
        this.cotizacionCambio = new Subject();
    }
    ;
    ServicioCotizacion.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("api/CotizacionController/GetCotizaciones").subscribe(function (result) {
            _this._bandeja = result;
        }, function (error) { return console.error(error); });
    };
    ServicioCotizacion.prototype.setCotizaciones = function (cotizaciones) {
        this.cotizaciones = cotizaciones;
        this.cotizacionCambio.next(this.cotizaciones.slice());
    };
    ServicioCotizacion.prototype.actualizarCotizaciones = function (cotizaciones) {
        var _this = this;
        // Send cotizaciones with filters
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var params = new HttpParams().set("cliente", cotizaciones.cliente)
            .set("estado", cotizaciones.estado)
            .set("fecha_cotizacion", cotizaciones.fecha_cotizacion)
            .set("nro_cotizacion", cotizaciones.nro_cotizacion)
            .set("sucursal", cotizaciones.sucursal);
        this.http.post("api/CotizacionController/GetCotizacionesRutCli", { params: params }).subscribe(function (result) {
            //this.http.get<Bandeja[]>('$api/CotizacionController/GetCotizacionesRutCli/${' + cotizaciones.cliente + '}').subscribe(result => {
            _this._bandeja = result;
        }, function (error) { return console.error(error); });
        //this.http.post<Bandeja[]>("api/CotizacionController/GetCotizacionesRutCli", { params: JSON.stringify(cotizaciones.cliente) }).subscribe(result => {
        //    //this.http.get<Bandeja[]>('$api/CotizacionController/GetCotizacionesRutCli/${' + cotizaciones.cliente + '}').subscribe(result => {
        //    this._bandeja = result;
        //}, error => console.error(error));
        this._bandejaCambio.next(this._bandeja.slice());
    };
    ServicioCotizacion.prototype.getCotizaciones = function () {
        var _this = this;
        if (typeof this._bandeja === 'undefined') {
            this.http.get("api/CotizacionController/GetCotizaciones").subscribe(function (result) {
                _this._bandeja = result;
            }, function (error) { return console.error(error); });
        }
        return this._bandeja.slice();
    };
    ServicioCotizacion.prototype.getCotizacion = function (index) {
        return this._bandeja[index];
    };
    ServicioCotizacion = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ServicioCotizacion);
    return ServicioCotizacion;
}());
export { ServicioCotizacion };
//# sourceMappingURL=cotizacion.service.js.map