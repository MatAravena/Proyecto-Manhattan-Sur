var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ServicioCotizacion } from '../cotizacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cotizacion } from '../cotizacion.model';
import { RestService } from '../../rest.service';
import 'daterangepicker';
import 'jquery';
import 'select2';
var CotizacionFiltroComponent = /** @class */ (function () {
    function CotizacionFiltroComponent(servicioCotizacion, route, router, api_Rest) {
        this.servicioCotizacion = servicioCotizacion;
        this.route = route;
        this.router = router;
        this.api_Rest = api_Rest;
        this.filtro = new Cotizacion();
        this.sucursales = [];
    }
    CotizacionFiltroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            //this.cotizacion = this.servicioCotizacion.getCotizacion(this.id);
        });
        this.getSucursales();
    };
    CotizacionFiltroComponent.prototype.getSucursales = function () {
        var _this = this;
        this.api_Rest.getSucursales().subscribe(function (data) {
            _this.sucursales = data;
        });
    };
    CotizacionFiltroComponent.prototype.onClearCotizaciones = function () {
        this.router.navigate(['/cotizaciones']);
    };
    CotizacionFiltroComponent.prototype.llenarFiltro = function () {
        console.log();
    };
    CotizacionFiltroComponent = __decorate([
        Component({
            selector: 'app-cotizacion-filtro',
            templateUrl: './cotizacion-filtro.component.html',
            styleUrls: ['./cotizacion-filtro.component.css']
        }),
        __metadata("design:paramtypes", [ServicioCotizacion,
            ActivatedRoute,
            Router,
            RestService])
    ], CotizacionFiltroComponent);
    return CotizacionFiltroComponent;
}());
export { CotizacionFiltroComponent };
//# sourceMappingURL=cotizacion-filtro.component.js.map