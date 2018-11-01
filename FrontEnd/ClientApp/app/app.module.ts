import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CotizacionComponent } from './cotizaciones/cotizacion.component';
import { CotizacionDetalleComponent } from './cotizaciones/cotizacion-detalle/cotizacion-detalle.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { ServicioCotizacion } from './cotizaciones/cotizacion.service';
import { DataStorageService } from './shared/data-storage.service';
import { CotizacionFiltroComponent } from './cotizaciones/cotizacion-filtro/cotizacion-filtro.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CotizacionVentanaComponent } from './cotizaciones/cotizacion-ventana/cotizacion-ventana.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CotizacionComponent,
    CotizacionDetalleComponent,
    DropdownDirective,
    CotizacionFiltroComponent,
    CotizacionVentanaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ServicioCotizacion, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
