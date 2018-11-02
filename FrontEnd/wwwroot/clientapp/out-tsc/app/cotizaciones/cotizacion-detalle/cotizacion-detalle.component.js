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
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioCotizacion } from '../cotizacion.service';
var CotizacionDetalleComponent = /** @class */ (function () {
    //private coti: Cotizacion = new Cotizacion();
    function CotizacionDetalleComponent(servicioCotizacion, router, route
    //,private _data: DataService
    ) {
        this.servicioCotizacion = servicioCotizacion;
        this.router = router;
        this.route = route;
    }
    CotizacionDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripcion = this.servicioCotizacion._bandejaCambio
            .subscribe(function (cotizaciones) {
            _this.cotizaciones = cotizaciones;
        });
        this.cotizaciones = this.servicioCotizacion.getCotizaciones();
        //this._data._filtros.subscribe(coti => this.coti = coti);
    };
    //onAgregarDataCampos() {
    //  this.servicioCotizacion.agregarDataCampos(this.cotizacion.datos_cotizacion);
    //}
    //SetGrid() 0 {
    //    this.cotizaciones = this.servicioCotizacion.getCotizaciones();
    //}
    //onAgregarDataCampos() {
    //  this.servicioCotizacion.agregarDataCampos(this.cotizacion.datos_cotizacion);
    //}
    CotizacionDetalleComponent.prototype.onEditarCotizacion = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    };
    CotizacionDetalleComponent.prototype.ngOnDestroy = function () {
        this.subscripcion.unsubscribe();
        this.router.navigate(['/cotizaciones']);
    };
    CotizacionDetalleComponent = __decorate([
        Component({
            selector: 'app-cotizacion-detalle',
            templateUrl: './cotizacion-detalle.component.html',
            styleUrls: ['./cotizacion-detalle.component.css']
        }),
        __metadata("design:paramtypes", [ServicioCotizacion,
            Router,
            ActivatedRoute
            //,private _data: DataService
        ])
    ], CotizacionDetalleComponent);
    return CotizacionDetalleComponent;
}());
export { CotizacionDetalleComponent };
//# sourceMappingURL=cotizacion-detalle.component.js.map