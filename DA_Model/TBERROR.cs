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
    
    public partial class TBERROR
    {
        public TBERROR()
        {
            this.TBBITACORERRORES = new HashSet<TBBITACORERRORE>();
        }
    
        public long IDERROR { get; set; }
        public Nullable<long> CODIGOERROR { get; set; }
        public string TIPOERROR { get; set; }
        public string MENSAJEDELERROR { get; set; }
        public string ERRORSISTEMA { get; set; }
        public string FUENTEORIGEN { get; set; }
        public string METODODELERROR { get; set; }
    
        public virtual ICollection<TBBITACORERRORE> TBBITACORERRORES { get; set; }
    }
}
