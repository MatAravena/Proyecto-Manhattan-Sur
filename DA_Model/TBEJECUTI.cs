//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DA_Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class TBEJECUTI
    {
        public TBEJECUTI()
        {
            this.TBCOTIZACIONs = new HashSet<TBCOTIZACION>();
        }
    
        public long IDEJECUTI { get; set; }
        public string RUTEJECUTI { get; set; }
        public string NOMBREEJECUTI { get; set; }
        public string APELLIDEJECUTI { get; set; }
        public string EMAILEJECUTI { get; set; }
        public long IDROL { get; set; }
    
        public virtual TBROL TBROL { get; set; }
        public virtual ICollection<TBCOTIZACION> TBCOTIZACIONs { get; set; }
    }
}
