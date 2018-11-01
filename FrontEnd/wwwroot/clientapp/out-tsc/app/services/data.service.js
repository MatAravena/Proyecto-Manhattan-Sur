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
import { BehaviorSubject } from 'rxjs';
import { Cotizacion } from '../cotizaciones/cotizacion.model';
var DataService = /** @class */ (function () {
    function DataService() {
        //private _dataListSource: BehaviorSubject<Cotizacion> = new BehaviorSubject(Cotizacion);
        //dataList: Observable<Cotizacion[]> = this._dataListSource.asObservable().distinctUntilChanged();
        //dataList: Observable<Cotizacion[]> = this._dataListSource.asObservable();
        //getDataList(): Observable<Cotizacion> {
        //    return this.httpService.get('/data').map(res => {
        //        this._dataListSource.next(res);
        //    });
        //}
        this.coti = new BehaviorSubject(new Cotizacion());
        this._filtros = this.coti.asObservable();
    }
    DataService.prototype.SetFiltros = function (cotiPara) {
        this.coti.next(cotiPara);
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map