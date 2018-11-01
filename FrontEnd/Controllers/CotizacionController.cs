using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Collections.Generic;
using Newtonsoft.Json;
using DA_Model; 
using Newtonsoft.Json.Linq;
using System.Web.Script.Serialization;

namespace FrontEnd.Controllers
{
    [Route("api/CotizacionController")]
    [ApiController]
    public class CotizacionController : ControllerBase
    {
        //HttpWebRequest for control
        //WebClient for simplicity and brevity
        //RestSharp for both on non-.NET 4.5 environments
        //HttpClient for both + async features on.NET 4.5 environments

        [Route("api/CotizacionController/GetCotizacionesRutCli")]
        [HttpPost("[action]")]
        public ActionResult<IEnumerable<TbBandejaAngular>> GetCotizacionesRutCli(dynamic param)
        {
            HttpClient client = new HttpClient();

            //dynamic asd = JObject.Parse(param); 
            ////dynamic asd = JsonConvert.DeserializeObject(param);
            //Filtros _filtros = new Filtros(asd);
            //System.Web.HttpUtility.
            //JavaScriptSerializer jss = new JavaScriptSerializer();
            //var d = jss.Deserialize<dynamic>(str);







            List<TBBANDEJAENTRADA> lst = null;
            var response = client.GetAsync("http://100.100.2.69:81/WSLineasComerciales/Api/Bandeja/BandejaAll")
                .ContinueWith((tastwithresponse) =>
                {
                    var respon = tastwithresponse.Result;
                    var jsonstring = respon.Content.ReadAsStringAsync();
                    jsonstring.Wait();
                    lst = JsonConvert.DeserializeObject<List<TBBANDEJAENTRADA>>(jsonstring.Result);
                });
            response.Wait();
            return ConvierteModeloAAngular(lst);   //.FindAll(x => x.rutClientePipe == rutCliente.ToString());
        }

        [Route("api/CotizacionController/GetCotizaciones")]
        [HttpGet("[action]")]
        public ActionResult<IEnumerable<TbBandejaAngular>> GetCotizaciones()
        {
            HttpClient client = new HttpClient();
            List<TBBANDEJAENTRADA> lst = null;
            var response = client.GetAsync("http://100.100.2.69:81/WSLineasComerciales/Api/Bandeja/BandejaAll")
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
            var response = client.GetAsync("http://100.100.2.69:81/WSLineasComerciales/Api/Bandeja/BandejaAll")
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

}