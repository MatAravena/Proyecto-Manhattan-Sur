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
    
    public partial class TBROL
    {
        public TBROL()
        {
            this.TBEJECUTIs = new HashSet<TBEJECUTI>();
        }
    
        public long IDROL { get; set; }
        public string NOMROL { get; set; }
    
        public virtual ICollection<TBEJECUTI> TBEJECUTIs { get; set; }
    }
}