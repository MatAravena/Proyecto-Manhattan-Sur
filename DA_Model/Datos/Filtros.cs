using System;
using System.Globalization;

namespace DA_Model
{
    public class Filtros
    {
        public string cliente { get; set; }
        public int nro_cotizacion { get; set; }
        public DateTime? fecha_cotizacion { get; set; }
        public string estado { get; set; }
        public string sucursal { get; set; }

        Filtros(string cliente,
                    int nro_cotizacion,
                    DateTime? fecha_cotizacion,
                    string estado,
                    string sucursal)
        {
            this.cliente = cliente;
            this.nro_cotizacion = nro_cotizacion;
            this.fecha_cotizacion = fecha_cotizacion;
            this.estado = estado;
            this.sucursal = sucursal;
        }



        public Filtros(dynamic dyna)
        {
            foreach (var item in dyna)
            {
                switch ((string)item.param)
                {
                    case "cliente":
                        this.cliente = (string)item.value;
                        break;

                    case "sucursal":
                        this.sucursal = (string)item.value;
                        break;

                    case "estado":
                        this.estado = (string)item.value;
                        break;

                    case "nro_cotizacion":
                        int a = 0;
                        this.nro_cotizacion = int.TryParse((string)item.value, out a) ? a : 0;
                        break;

                    case "fecha_cotizacion":
                        DateTime b = DateTime.MinValue;
                        this.fecha_cotizacion = DateTime.TryParse((string)item.value, out b) ? b : b;
                        break;

                    default:
                        break;
                }
            }
        }
    }
}