using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleDataController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
            { "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching" };

        //[HttpGet("[action]")]
        //public IEnumerable<TBEJECUTI> ListaEjecutivos()
        //{
        //    try
        //    {
        //        BS_ListaPosibilidades lstOp = new BS_ListaPosibilidades();
        //        IEnumerable<TBEJECUTI> lstFinal = lstOp.ReturnListaEjecutivos();

        //        return lstFinal;
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new ErrorApi(ex);
        //    }
        //}

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            var lstClima = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
            return lstClima;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        }

        [HttpGet("[action]")]
        public string[] GetSummaries()
        {
            return Summaries;
        }
    }
}
