using System;
using System.Runtime.Serialization;

namespace DA_Model
{
    public class TBBANDEJAENTRADA
    {
        [DataMember(Name = "Id Cotizacion")]
        public Int64 IDCOT { get; set; }

        [DataMember(Name = "Rut Corredor Pipedrive")]
        public string RUTCORPIP { get; set; }

        [DataMember(Name = "Nombre Razon Social")]
        public string NOMRAZSOCCOT { get; set; }

        [DataMember(Name = "Codigo Sucursal")]
        public string CODSUC { get; set; }

        [DataMember(Name = "Descripcion Sucursal")]
        public string DESSUC { get; set; }

        [DataMember(Name = "Rut Cliente Pipedrive")]
        public string RUTCLIPIP { get; set; }

        [DataMember(Name = "Razon Social Cliente")]
        public string RAZSOCCLI { get; set; }

        [DataMember(Name = "Fecha Creacion Cotizacion")]
        public DateTime? FECCRECOT { get; set; }

        [DataMember(Name = "Descripcion Oportunidad Cotizacion")]
        public string DESOPOCOT { get; set; }

        [DataMember(Name = "Nombre Ejecutivo Comercial")]
        public string NOMEJECOMCOT { get; set; }

        [DataMember(Name = "Id Suscriptor")]
        public decimal? IDSUSCRIP { get; set; }

        [DataMember(Name = "Nombre Ramo")]
        public string NOMRAM { get; set; }
    }

    public class TbBandejaAngular
    {
        public TbBandejaAngular(long idCotizacion, string rutCorredorPipe, string nombreRazonSocial, string codigoSucursal, string descripSucursal, string rutClientePipe, string razonSocialCliente, DateTime? fechaCreacionCotizacion, string descripOportunidaCotizacion, string nombreEjecutivoComercial, decimal? idSuscriptor, string nombreRamo)
        {
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

        [DataMember(Name = "Id Cotizacion")]
        public Int64 idCotizacion { get; set; }

        [DataMember(Name = "Rut Corredor Pipedrive")]
        public string rutCorredorPipe { get; set; }

        [DataMember(Name = "Nombre Razon Social")]
        public string nombreRazonSocial { get; set; }

        [DataMember(Name = "Codigo Sucursal")]
        public string codigoSucursal { get; set; }

        [DataMember(Name = "Descripcion Sucursal")]
        public string descripSucursal { get; set; }

        [DataMember(Name = "Rut Cliente Pipedrive")]
        public string rutClientePipe { get; set; }

        [DataMember(Name = "Razon Social Cliente")]
        public string razonSocialCliente { get; set; }

        [DataMember(Name = "Fecha Creacion Cotizacion")]
        public DateTime? fechaCreacionCotizacion { get; set; }

        [DataMember(Name = "Descripcion Oportunidad Cotizacion")]
        public string descripOportunidaCotizacion { get; set; }

        [DataMember(Name = "Nombre Ejecutivo Comercial")]
        public string nombreEjecutivoComercial { get; set; }

        [DataMember(Name = "Id Suscriptor")]
        public decimal? idSuscriptor { get; set; }

        [DataMember(Name = "Nombre Ramo")]
        public string nombreRamo { get; set; }
    }
}