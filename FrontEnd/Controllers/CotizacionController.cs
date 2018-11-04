using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Collections.Generic;
using Newtonsoft.Json;
using DA_Model;
using Newtonsoft.Json.Linq;
using System;

namespace FrontEnd.Controllers
{
    [Route("api/CotizacionController")]
    [ApiController]
    public class CotizacionController : ControllerBase
    {
        MickUrls _mickUrls = new MickUrls();
        //HttpWebRequest for control
        //WebClient for simplicity and brevity
        //RestSharp for both on non-.NET 4.5 environments
        //HttpClient for both + async features on.NET 4.5 environments

        [Route("api/CotizacionController/GetCotizacionesRutCli")]
        [HttpPost("[action]")]
        public ActionResult<IEnumerable<TbBandejaAngular>> GetCotizacionesRutCli([FromBody]dynamic body)
        {
            HttpClient client = new HttpClient();

            // Debería poder ser legible de mejor manera !!
            Filtros _filtro = new Filtros(body.filtro.updates);
            List<TBBANDEJAENTRADA> lst = null;
            List<TbBandejaAngular> lstSalida = null;

            //var response = client.GetAsync("http://100.100.2.69:81/WSLineasComerciales/Api/Bandeja/BandejaAll")
            var response = client.GetAsync(_mickUrls.BandejaEntradaAll)
                .ContinueWith((tastwithresponse) =>
                {
                    var respon = tastwithresponse.Result;
                    var jsonstring = respon.Content.ReadAsStringAsync();
                    jsonstring.Wait();
                    lst = JsonConvert.DeserializeObject<List<TBBANDEJAENTRADA>>(jsonstring.Result);
                });
            response.Wait();

            lstSalida = ConvierteModeloAAngular(lst).FindAll(x => _filtro.cliente != string.Empty ? x.rutClientePipe == _filtro.cliente : true
                                                        //&& (_filtro.estado != string.Empty ? x. == _filtro.estado  : true)
                                                        && _filtro.fecha_cotizacion != DateTime.Parse("00010101") ? x.fechaCreacionCotizacion == _filtro.fecha_cotizacion : true
                                                        && _filtro.nro_cotizacion != 0 ? x.idCotizacion == _filtro.nro_cotizacion : true
                                                        && _filtro.sucursal != string.Empty ? x.codigoSucursal == _filtro.sucursal : true
                                                        );
            return lstSalida;
        }

        [Route("api/CotizacionController/GetCotizaciones")]
        [HttpGet("[action]")]
        public ActionResult<IEnumerable<TbBandejaAngular>> GetCotizaciones()
        {
            HttpClient client = new HttpClient();
            List<TBBANDEJAENTRADA> lst = null;
            //var response = client.GetAsync("http://100.100.2.69:81/WSLineasComerciales/Api/Bandeja/BandejaAll")
            var response = client.GetAsync(_mickUrls.BandejaEntradaAll)
                .ContinueWith((tastwithresponse) =>
                {
                    var respon = tastwithresponse.Result;
                    var jsonstring = respon.Content.ReadAsStringAsync();
                    jsonstring.Wait();
                    lst = JsonConvert.DeserializeObject<List<TBBANDEJAENTRADA>>(jsonstring.Result);
                });
            response.Wait();
            return ConvierteModeloAAngular(lst);
        }

        [Route("api/CotizacionController/GetCotizacionesasdasd")]
        [HttpPost]
        public void GetCotizacionesasdasd(string nombre)
        {
            HttpClient client = new HttpClient();
            List<TBBANDEJAENTRADA> lst = null;
            //var response = client.GetAsync("http://100.100.2.69:81/WSLineasComerciales/Api/Bandeja/BandejaAll")
            var response = client.GetAsync(_mickUrls.BandejaEntradaAll)
                .ContinueWith((tastwithresponse) =>
                {
                    var respon = tastwithresponse.Result;
                    var jsonstring = respon.Content.ReadAsStringAsync();
                    jsonstring.Wait();
                    lst = JsonConvert.DeserializeObject<List<TBBANDEJAENTRADA>>(jsonstring.Result);
                });
            response.Wait();
        }

        private List<TbBandejaAngular> ConvierteModeloAAngular(List<TBBANDEJAENTRADA> lstBdja)
        {
            List<TbBandejaAngular> lst = new List<TbBandejaAngular>();
            foreach (var b in lstBdja)
            {
                lst.Add(new TbBandejaAngular(b.IDCOT, b.RUTCORPIP, b.NOMRAZSOCCOT, b.CODSUC, b.DESSUC, b.RUTCLIPIP, b.RAZSOCCLI, b.FECCRECOT, b.DESOPOCOT, b.NOMEJECOMCOT, b.IDSUSCRIP, b.NOMRAM));
            }

            return lst;
        }
    }



    public class MickUrls
    {
        public string BandejaEntradaAll { get; set; }
        public string CotizacionSeleccionada { get; set; }
        public string Sucursal { get; set; }
        public string GrupoRamos { get; set; }
        public string Ramos { get; set; }
        public string Moneda { get; set; }
        public string CompaniaRiesgoActual { get; set; }
        public string Actividad { get; set; }
        public string ActualizaCotizacion { get; set; }

        public MickUrls()
        {
            BandejaEntradaAll = "http://whiteshark.cl/WSLineasComerciales/api/Bandeja/BandejaAll.php";
            CotizacionSeleccionada = "http://whiteshark.cl/WSLineasComerciales/api/Cotizacion/GetCotiSeleccionada.php";
            Sucursal = "http://whiteshark.cl/WSLineasComerciales/api/ComboList/Sucursal.php";
            GrupoRamos = "http://whiteshark.cl/WSLineasComerciales/api/ComboList/GrupoRamos.php";
            Ramos = "http://whiteshark.cl/WSLineasComerciales/api/ComboList/Ramos.php";
            Moneda = "http://whiteshark.cl/WSLineasComerciales/api/ComboList/Moneda.php";
            CompaniaRiesgoActual = "http://whiteshark.cl/WSLineasComerciales/api/ComboList/CompaniaRiesgoActual.php";
            Actividad = "http://100.100.2.69:81/WSLineasComerciales/api/ComboList/Actividad.php";
            ActualizaCotizacion = "http://whiteshark.cl/WSLineasComerciales/api/Cotizacion/ActualizaCotizacion";
        }
    }
}