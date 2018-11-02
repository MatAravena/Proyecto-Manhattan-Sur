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
import { RestService } from '../../rest.service';
import { Router, ActivatedRoute } from '@angular/router';
var CotizacionVentanaComponent = /** @class */ (function () {
    function CotizacionVentanaComponent(router, route, api_Rest) {
        this.router = router;
        this.route = route;
        this.api_Rest = api_Rest;
        this.ubicaciones = [];
        this.grupoRamos = [];
        this.ramos = [];
        this.ciaRiesgos = [];
        this.monedas = [];
        this.actividades = [];
    }
    CotizacionVentanaComponent.prototype.ngOnInit = function () {
        this.getGrupoRamos();
        this.getRamos();
        this.getCiaRiesgo();
        this.getMoneda();
        this.getActividad();
    };
    CotizacionVentanaComponent.prototype.agregarUbicacion = function () {
        this.ubicaciones.push(this.ubicacion);
    };
    CotizacionVentanaComponent.prototype.getGrupoRamos = function () {
        var _this = this;
        this.api_Rest.getGrupoRamo().subscribe(function (data) {
            _this.grupoRamos = data;
        });
    };
    CotizacionVentanaComponent.prototype.getRamos = function () {
        var _this = this;
        this.api_Rest.getRamos().subscribe(function (data) {
            _this.ramos = data;
        });
    };
    CotizacionVentanaComponent.prototype.getCiaRiesgo = function () {
        var _this = this;
        this.api_Rest.getCompaniaRiesgo().subscribe(function (data) {
            _this.ciaRiesgos = data;
        });
    };
    CotizacionVentanaComponent.prototype.getMoneda = function () {
        var _this = this;
        this.api_Rest.getMoneda().subscribe(function (data) {
            _this.monedas = data;
        });
    };
    CotizacionVentanaComponent.prototype.getActividad = function () {
        var _this = this;
        this.api_Rest.getActividad().subscribe(function (data) {
            _this.actividades = data;
        });
    };
    CotizacionVentanaComponent = __decorate([
        Component({
            selector: 'app-cotizacion-ventana',
            templateUrl: './cotizacion-ventana.component.html',
            styleUrls: ['./cotizacion-ventana.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            RestService])
    ], CotizacionVentanaComponent);
    return CotizacionVentanaComponent;
}());
export { CotizacionVentanaComponent };
//# sourceMappingURL=cotizacion-ventana.component.js.map