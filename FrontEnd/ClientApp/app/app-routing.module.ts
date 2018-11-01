import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionComponent } from './cotizaciones/cotizacion.component';
import {CotizacionVentanaComponent} from './cotizaciones/cotizacion-ventana/cotizacion-ventana.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/cotizaciones', pathMatch: 'full' },
  { path: 'cotizacion_ventana', component: CotizacionVentanaComponent},
  { path: 'cotizaciones', component: CotizacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
