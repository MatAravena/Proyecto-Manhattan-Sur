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
import { HttpClient } from '@angular/common/http';
var CotizacionStartComponent = /** @class */ (function () {
    function CotizacionStartComponent(http) {
        var _this = this;
        this.http = http;
        http.get("api/DataController/Index").subscribe(function (result) {
            _this.lstEje = result;
        }, function (error) { return console.error(error); });
    }
    CotizacionStartComponent.prototype.ngOnInit = function () {
    };
    CotizacionStartComponent = __decorate([
        Component({
            selector: 'app-cotizacion-start',
            templateUrl: './cotizacion-start.component.html',
            styleUrls: ['./cotizacion-start.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], CotizacionStartComponent);
    return CotizacionStartComponent;
}());
export { CotizacionStartComponent };
//# sourceMappingURL=cotizacion-start.component.js.map