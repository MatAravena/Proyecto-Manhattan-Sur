export class Cotizacion {
    cliente: string;
    nro_cotizacion: string;
    fecha_cotizacion: string;
    estado: string;
    sucursal: string;

    constructor(cliente?: string, nro?: string, fecha_cotizacion?: string, estado?: string, sucursal?: string) {
        this.cliente = cliente;
        this.nro_cotizacion = nro;
        this.fecha_cotizacion = fecha_cotizacion;
        this.estado = estado;
        this.sucursal = sucursal;
    }
}
