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
import { HttpClient } from '@angular/common/http';
var bandejaEntradaComponent = /** @class */ (function () {
    function bandejaEntradaComponent(http) {
        //http.get<PruebaJSon[]>("http://validate.jsontest.com/?json=%7B%22key%22:%22value%22").subscribe(result => {
        //    this.lstEje = result;
        //}, error => console.error(error));
        var _this = this;
        this.http = http;
        http.get("api/DataController/Index").subscribe(function (result) {
            _this.lstEje = result;
        }, function (error) { return console.error(error); });
    }
    bandejaEntradaComponent = __decorate([
        Component({
            selector: 'bandejaEntrada',
            templateUrl: './bandejaEntrada.component.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], bandejaEntradaComponent);
    return bandejaEntradaComponent;
}());
export { bandejaEntradaComponent };
//# sourceMappingURL=bandejaEntrada.component.js.map