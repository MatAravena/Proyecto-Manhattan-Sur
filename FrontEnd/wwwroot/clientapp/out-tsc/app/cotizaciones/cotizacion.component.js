var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { CotizacionDetalleComponent } from './cotizacion-detalle/cotizacion-detalle.component';
import { CotizacionFiltroComponent } from './cotizacion-filtro/cotizacion-filtro.component';
var CotizacionComponent = /** @class */ (function () {
    function CotizacionComponent() {
        this.estado = 'hidden';
    }
    CotizacionComponent.prototype.ngOnInit = function () {
    };
    CotizacionComponent.prototype.onBuscarCotizacion = function () {
        this.estado === 'hidden' ? this.estado = 'visible' : this.estado = 'hidden';
    };
    __decorate([
        ViewChild(CotizacionDetalleComponent),
        __metadata("design:type", CotizacionDetalleComponent)
    ], CotizacionComponent.prototype, "detalle", void 0);
    __decorate([
        ViewChild(CotizacionFiltroComponent),
        __metadata("design:type", CotizacionFiltroComponent)
    ], CotizacionComponent.prototype, "filtro", void 0);
    CotizacionComponent = __decorate([
        Component({
            selector: 'app-cotizaciones',
            templateUrl: './cotizacion.component.html',
            styleUrls: ['./cotizacion.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], CotizacionComponent);
    return CotizacionComponent;
}());
export { CotizacionComponent };
//# sourceMappingURL=cotizacion.component.js.map