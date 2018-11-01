var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeaderComponent } from './header/header.component';
import { CotizacionComponent } from './cotizaciones/cotizacion.component';
import { CotizacionDetalleComponent } from './cotizaciones/cotizacion-detalle/cotizacion-detalle.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { ServicioCotizacion } from './cotizaciones/cotizacion.service';
import { CotizacionFiltroComponent } from './cotizaciones/cotizacion-filtro/cotizacion-filtro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavMenuComponent,
                HomeComponent,
                CounterComponent,
                FetchDataComponent,
                HeaderComponent,
                CotizacionComponent,
                CotizacionDetalleComponent,
                DropdownDirective,
                CotizacionFiltroComponent
            ],
            imports: [
                BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                AppRoutingModule,
                BrowserAnimationsModule
                //,RouterModule.forRoot([
                //    { path: '', component: HomeComponent, pathMatch: 'full' },
                //    { path: 'counter', component: CounterComponent },
                //    { path: 'fetch-data', component: FetchDataComponent },
                //    { path: 'bandejaEntrada', component: bandejaEntradaComponent }
                //])
            ],
            providers: [ServicioCotizacion],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map