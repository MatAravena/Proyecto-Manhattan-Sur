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
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ServicioCotizacion } from '../cotizaciones/cotizacion.service';
var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, servicioCotizacion) {
        this.http = http;
        this.servicioCotizacion = servicioCotizacion;
    }
    DataStorageService.prototype.guardarCotizaciones = function () {
        return this.http.put('url-servicio-cotizaciones', this.servicioCotizacion.getCotizaciones());
    };
    DataStorageService.prototype.getCotizaciones = function () {
        var _this = this;
        this.http.get('url-servicio-cotizaciones')
            .map(function (response) {
            var cotizaciones = response.json();
            for (var _i = 0, cotizaciones_1 = cotizaciones; _i < cotizaciones_1.length; _i++) {
                var cotizacion = cotizaciones_1[_i];
                if (!cotizacion['datos_cotizacion']) {
                    cotizacion['datos_cotizacion'] = [];
                }
            }
            return cotizaciones;
        })
            .subscribe(function (cotizaciones) {
            _this.servicioCotizacion.setCotizaciones(cotizaciones);
        });
    };
    DataStorageService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, ServicioCotizacion])
    ], DataStorageService);
    return DataStorageService;
}());
export { DataStorageService };
//# sourceMappingURL=data-storage.service.js.map