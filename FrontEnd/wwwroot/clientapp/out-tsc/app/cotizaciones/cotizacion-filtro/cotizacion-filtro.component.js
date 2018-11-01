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
var CotizacionFiltroComponent = /** @class */ (function () {
    function CotizacionFiltroComponent(servicioCotizacion, route, router) {
        this.servicioCotizacion = servicioCotizacion;
        this.route = route;
        this.router = router;
        this.coti = new Cotizacion();
    }
    CotizacionFiltroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            //this.coti = this.servicioCotizacion.getCotizacion(this.id);
        });
    };
    CotizacionFiltroComponent.prototype.onClearCotizaciones = function () {
        this.router.navigate(['/cotizaciones']);
    };
    CotizacionFiltroComponent.prototype.SetFiltros = function (form) {
        this.coti.cliente = form.value.rut_cliente;
        this.coti.nro_cotizacion = form.value.nro_cotizacion;
        this.coti.fecha_cotizacion = form.value.fecha_cotizacion;
        this.coti.estado = form.value.estado;
        this.coti.sucursal = form.value.sucursal;
        //this.cotiDetail.SetGrid();
        //this._data.SetFiltros();
        //this._data.SetFiltros(this.coti);
        this.servicioCotizacion.actualizarCotizaciones(this.coti);
    };
    CotizacionFiltroComponent = __decorate([
        Component({
            selector: 'app-cotizacion-filtro',
            templateUrl: './cotizacion-filtro.component.html',
            styleUrls: ['./cotizacion-filtro.component.css']
        }),
        __metadata("design:paramtypes", [ServicioCotizacion,
            ActivatedRoute,
            Router])
    ], CotizacionFiltroComponent);
    return CotizacionFiltroComponent;
}());
export { CotizacionFiltroComponent };
//# sourceMappingURL=cotizacion-filtro.component.js.map