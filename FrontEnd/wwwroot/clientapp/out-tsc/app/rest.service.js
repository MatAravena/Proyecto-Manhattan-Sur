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
import { HttpClient } from '@angular/common/http';
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
        this.REST_URL = 'http://100.100.2.69:81/WSLineasComerciales/api/ComboList/';
    }
    RestService.prototype.getSucursales = function () {
        return this.http.get(this.REST_URL + 'Sucursal');
    };
    RestService.prototype.getGrupoRamo = function () {
        return this.http.get(this.REST_URL + 'GrupoRamos');
    };
    RestService.prototype.getRamos = function () {
        return this.http.get(this.REST_URL + 'Ramos');
    };
    RestService.prototype.getCompaniaRiesgo = function () {
        return this.http.get(this.REST_URL + 'CompaniaRiesgoActual');
    };
    RestService.prototype.getMoneda = function () {
        return this.http.get(this.REST_URL + 'Moneda');
    };
    RestService.prototype.getActividad = function () {
        return this.http.get(this.REST_URL + 'Actividad');
    };
    RestService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RestService);
    return RestService;
}());
export { RestService };
//# sourceMappingURL=rest.service.js.map