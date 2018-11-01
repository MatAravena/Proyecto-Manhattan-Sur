using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DA_Model
{
    public class Filtros
    {
        string cliente { get; set; }
        string nro_cotizacion { get; set; }
        string fecha_cotizacion { get; set; }
        string estado { get; set; }
        string sucursal { get; set; }

        Filtros(string cliente,
                    string nro_cotizacion,
                    string fecha_cotizacion,
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
            this.cliente = dyna.cliente;
            this.nro_cotizacion = dyna.nro_cotizacion;
            this.fecha_cotizacion = dyna.fecha_cotizacion;
            this.estado = dyna.estado;
            this.sucursal = dyna.sucursal;
        }
    }
}