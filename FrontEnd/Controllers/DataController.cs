using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DA_Model;
using System.Net.Http;
using Newtonsoft.Json;

namespace FrontEnd.Controllers
{
    public class PruebaJSon
    {
        public int error { get; set; }
        public string object_or_array { get; set; }
        public string error_info { get; set; }
        public string validate { get; set; }

        public PruebaJSon()
        { }
        //PruebaJSon(string error, string object_or_array, string error_info, string validate)
        //{
        //    this.error = error;
        //    this.object_or_array = object_or_array;
        //    this.error_info = error_info;
        //    this.validate = validate;
        //}
    }

    //public class TBSUCURSA
    //{
    //    public string CODSUC { get; set; }
    //    public string DESSUC { get; set; }
    //    public Sucursal()
    //    { }
    //}

    [Route("api/DataController")]
    [ApiController]
    public class DataController : Controller
    {
        static HttpClient client = new HttpClient();
        static async Task<List<TBSUCURSA>> GetProductAsync()
        {
            List<TBSUCURSA> sucu = null;
            var response = client.GetAsync("http://10.2.0.34/api/ComboList/Sucursal")
                .ContinueWith((tastwithresponse) =>
                {
                    var respon = tastwithresponse.Result;
                    var jsonstring = respon.Content.ReadAsStringAsync();
                    jsonstring.Wait();
                    sucu = JsonConvert.DeserializeObject<List<TBSUCURSA>>(jsonstring.Result);
                });
            response.Wait();

            return sucu;
        }

        // GET api/values
        //[HttpGet]
        //[Route("api/[controller]/Index")]
        [HttpGet("[action]")]
        [Route("api/DataController/Index")]
        public ActionResult<IEnumerable<PruebaJSon>> Index()
        {
            //Task<List<Sucursal>> sucu = GetProductAsync();

            List<PruebaJSon> lst = new List<PruebaJSon>();
            for (int i = 0; i < 5; i++)
            {
                lst.Add(new PruebaJSon
                {
                    error = i,
                    object_or_array = "16725335-0",
                    error_info = "Matías",
                    validate = "Aravena"
                });
            }
            return lst;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return $"value{id}";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
