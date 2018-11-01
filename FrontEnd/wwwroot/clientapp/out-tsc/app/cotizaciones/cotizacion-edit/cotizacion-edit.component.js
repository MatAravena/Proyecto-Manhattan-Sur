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
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ServicioCotizacion } from '../cotizacion.service';
var CotizacionEditComponent = /** @class */ (function () {
    function CotizacionEditComponent(route, servicioCotizacion, router) {
        this.route = route;
        this.servicioCotizacion = servicioCotizacion;
        this.router = router;
        this.editMode = false;
    }
    CotizacionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    CotizacionEditComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.servicioCotizacion.actualizarCotizacion(this.id, this.cotizacionForm.value);
        }
        else {
            this.servicioCotizacion.agregarCotizacion(this.cotizacionForm.value);
        }
        this.onCancelar();
    };
    CotizacionEditComponent.prototype.onAgregarDataCampos = function () {
        this.cotizacionForm.get('datos_cotizacion').push(new FormGroup({
            'nombre': new FormControl(null, Validators.required),
            'descripcion': new FormControl(null, Validators.required)
        }));
    };
    CotizacionEditComponent.prototype.onBorrarDataCampos = function (index) {
        this.cotizacionForm.get('datos_cotizacion').removeAt(index);
    };
    CotizacionEditComponent.prototype.onCancelar = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    CotizacionEditComponent.prototype.initForm = function () {
        var cotizacionNombre = '';
        var cotizacionNro = '';
        var cotizacionFecha = '';
        var cotizacionDatos = new FormArray([]);
        if (this.editMode) {
            var cotizacion = this.servicioCotizacion.getCotizacion(this.id);
            cotizacionNombre = cotizacion.cliente;
            cotizacionNro = cotizacion.nro_cotizacion;
            cotizacionFecha = cotizacion.fecha_cotizacion;
            if (cotizacion['datos_cotizacion']) {
                for (var _i = 0, _a = cotizacion.datos_cotizacion; _i < _a.length; _i++) {
                    var dato_cotizacion = _a[_i];
                    cotizacionDatos.push(new FormGroup({
                        'nombre': new FormControl(dato_cotizacion.nombre, Validators.required),
                        'descripcion': new FormControl(dato_cotizacion.descripcion, Validators.required)
                    }));
                }
            }
        }
        this.cotizacionForm = new FormGroup({
            'cliente': new FormControl(cotizacionNombre, Validators.required),
            'nro_cotizacion': new FormControl(cotizacionNro, Validators.required),
            'fecha_cotizacion': new FormControl(cotizacionFecha, Validators.required),
            'datos_cotizacion': cotizacionDatos
        });
    };
    CotizacionEditComponent = __decorate([
        Component({
            selector: 'app-cotizacion-edit',
            templateUrl: './cotizacion-edit.component.html',
            styleUrls: ['./cotizacion-edit.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            ServicioCotizacion,
            Router])
    ], CotizacionEditComponent);
    return CotizacionEditComponent;
}());
export { CotizacionEditComponent };
//# sourceMappingURL=cotizacion-edit.component.js.map