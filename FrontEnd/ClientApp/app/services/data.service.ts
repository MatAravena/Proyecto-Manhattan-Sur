import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cotizacion } from '../cotizaciones/cotizacion.model';

@Injectable()
export class DataService {
    constructor() { }

    //private _dataListSource: BehaviorSubject<Cotizacion> = new BehaviorSubject(Cotizacion);
    //dataList: Observable<Cotizacion[]> = this._dataListSource.asObservable().distinctUntilChanged();
    //dataList: Observable<Cotizacion[]> = this._dataListSource.asObservable();

    //getDataList(): Observable<Cotizacion> {
    //    return this.httpService.get('/data').map(res => {
    //        this._dataListSource.next(res);
    //    });
    //}

    private coti = new BehaviorSubject(new Cotizacion());
    _filtros = this.coti.asObservable();

    SetFiltros(cotiPara: Cotizacion) {
        this.coti.next(cotiPara);
    }

}
