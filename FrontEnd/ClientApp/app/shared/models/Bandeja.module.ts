export class Bandeja {
    //IDCOT: string;
    //RUTCORPIP: string;
    //NOMRAZSOCCOT: string;
    //CODSUC: string;
    //DESSUC: string;
    //RUTCLIPIP: string;
    //RAZSOCCLI: string;
    //FECCRECOT: string;
    //DESOPOCOT: string;
    //NOMEJECOMCOT: string;
    //IDSUSCRIP: string;

    idCotizacion: number;
    rutCorredorPipe: string;
    nombreRazonSocial: string;
    codigoSucursal: number;
    descripSucursal: string;
    rutClientePipe: string;
    razonSocialCliente: string;
    fechaCreacionCotizacion: string;
    descripOportunidaCotizacion: string;
    nombreEjecutivoComercial: string;
    idSuscriptor: number;
    nombreRamo: string;

    constructor(idCotizacion?: number,
        rutCorredorPipe?: string,
        nombreRazonSocial?: string,
        codigoSucursal?: number,
        descripSucursal?: string,
        rutClientePipe?: string,
        razonSocialCliente?: string,
        fechaCreacionCotizacion?: string,
        descripOportunidaCotizacion?: string,
        nombreEjecutivoComercial?: string,
        idSuscriptor?: number,
        nombreRamo?: string) {

        this.idCotizacion = idCotizacion;
        this.rutCorredorPipe = rutCorredorPipe;
        this.nombreRazonSocial = nombreRazonSocial;
        this.codigoSucursal = codigoSucursal;
        this.descripSucursal = descripSucursal;
        this.rutClientePipe = rutClientePipe;
        this.razonSocialCliente = razonSocialCliente;
        this.fechaCreacionCotizacion = fechaCreacionCotizacion;
        this.descripOportunidaCotizacion = descripOportunidaCotizacion;
        this.nombreEjecutivoComercial = nombreEjecutivoComercial;
        this.idSuscriptor = idSuscriptor;
        this.nombreRamo = nombreRamo;
    }
}
