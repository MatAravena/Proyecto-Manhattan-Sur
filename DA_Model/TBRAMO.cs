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
    
    public partial class TBRAMO
    {
        public long IDRAM { get; set; }
        public string CODRAM { get; set; }
        public string NOMRAM { get; set; }
        public long IDGRURAM { get; set; }
        public string CODPIP { get; set; }
    
        public virtual TBGRUPRAMO TBGRUPRAMO { get; set; }
    }
}