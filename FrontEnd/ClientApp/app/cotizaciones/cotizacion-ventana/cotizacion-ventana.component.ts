import { Component, OnInit, Output } from '@angular/core';
import { RestService } from '../../rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotizacion-ventana',
  templateUrl: './cotizacion-ventana.component.html',
  styleUrls: ['./cotizacion-ventana.component.css']
})
export class CotizacionVentanaComponent implements OnInit {

    ubicacion: object;
    ubicaciones: Array<object> = [];


    constructor(private router: Router,
                private route: ActivatedRoute,
                private api_Rest: RestService) { }

    private grupoRamos: Array<object> = [];
    private ramos: Array<object> = [];
    private ciaRiesgos: Array<object> = [];
    private monedas: Array<object> = [];
    private actividades: Array<object> = [];

    ngOnInit(){
        this.getGrupoRamos();
        this.getRamos();
        this.getCiaRiesgo();
        this.getMoneda();
        this.getActividad();
    }

    
    public agregarUbicacion(){
        this.ubicaciones.push(this.ubicacion);
    }

    public getGrupoRamos(){
        this.api_Rest.getGrupoRamo().subscribe((data: Array<object>) => {
            this.grupoRamos = data;
        });
    }

    public getRamos() {
        this.api_Rest.getRamos().subscribe((data: Array<object>) => {
            this.ramos = data;
        });
    }

    public getCiaRiesgo() {
        this.api_Rest.getCompaniaRiesgo().subscribe((data: Array<object>) => {
            this.ciaRiesgos = data;
        });
    } 

    public getMoneda() {
        this.api_Rest.getMoneda().subscribe((data: Array<object>) => {
            this.monedas = data;
        });
    }

    public getActividad() {
        this.api_Rest.getActividad().subscribe((data: Array<object>) => {
            this.actividades = data;
        });
    }

 
    }
}
