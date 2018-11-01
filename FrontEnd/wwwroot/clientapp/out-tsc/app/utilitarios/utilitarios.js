var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from '@angular/core';
var utilitariosComponent = /** @class */ (function () {
    function utilitariosComponent() {
        //http.get<PruebaJSon[]>("http://validate.jsontest.com/?json=%7B%22key%22:%22value%22").subscribe(result => {
        //    this.lstEje = result;
        //}, error => console.error(error));
        //http.get<PruebaJSon[]>("api/DataController/Index").subscribe(result => {
        //    this.lstEje = result;
        //}, error => console.error(error));
    }
    utilitariosComponent.prototype.getSucursales = function () {
        var _this = this;
        this.http.get("http://10.2.0.34/api/ComboList/Sucursal").subscribe(function (result) {
            _this.lstSucursales = result;
        }, function (error) { return console.error(error); });
    };
    utilitariosComponent = __decorate([
        Component({
            selector: 'sucursales',
        }),
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], utilitariosComponent);
    return utilitariosComponent;
}());
export { utilitariosComponent };
//# sourceMappingURL=utilitarios.js.map