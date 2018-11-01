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
var FetchDataComponent = /** @class */ (function () {
    //constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    function FetchDataComponent(http) {
        var _this = this;
        this.http = http;
        http.get('api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result;
            _this.cacheForecasts = result;
        }, function (error) { return console.error(error); });
        http.get('api/SampleData/GetSummaries').subscribe(function (result) {
            _this.summaries = result;
        }, function (error) { return console.error(error); });
    }
    FetchDataComponent.prototype.filterForeCasts = function (filterVal) {
        if (filterVal == "0")
            this.forecasts = this.cacheForecasts;
        else
            this.forecasts = this.cacheForecasts.filter(function (item) { return item.summary == filterVal; });
    };
    FetchDataComponent = __decorate([
        Component({
            selector: 'app-fetch-data',
            templateUrl: './fetch-data.component.html'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], FetchDataComponent);
    return FetchDataComponent;
}());
export { FetchDataComponent };
//# sourceMappingURL=fetch-data.component.js.map