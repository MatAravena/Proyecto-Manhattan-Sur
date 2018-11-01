using System;
using Swashbuckle.AspNetCore.Swagger;
using System.Net;
using System.Runtime.Serialization.Json;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;


namespace FrontEnd.Controllers
{
    public class ServiciosGenericos
    {

        //var url = "http://localhost:8000/DEMOService/Client/156";
        //var webrequest = (HttpWebRequest)System.Net.WebRequest.Create(url);

        //using (var response = webrequest.GetResponse()) 
        //using (var reader = new StreamReader(response.GetResponseStream()))
        //{
        //var result = reader.ReadToEnd();
        //Label1.Text = Convert.ToString(result);
        //}


        public static void GetResponseSimply(Uri url, Action<Response> callback)
        {
            WebClient wc = new WebClient();
            wc.OpenReadCompleted += (o, a) =>
            {
                if (callback != null)
                {
                    DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(Response));
                    callback(ser.ReadObject(a.Result) as Response);
                }
            };
            wc.OpenReadAsync(url);
        }

        public static List<Object> GetResponse(string url)
        {
            HttpClient client = new HttpClient();
            List<Object> lst = null;
            var response = client.GetAsync(url)
                .ContinueWith((tastwithresponse) =>
                {
                    var respon = tastwithresponse.Result;
                    var jsonstring = respon.Content.ReadAsStringAsync();
                    jsonstring.Wait();
                    lst = JsonConvert.DeserializeObject<List<Object>>(jsonstring.Result);
                });
            response.Wait();
            return lst;
        }

        public static async Task<List<Object>> GetResponseAsync(string url)
        {
            HttpClient client = new HttpClient();
            List<Object> lst = null;
            var response = client.GetAsync(url)
                .ContinueWith((tastwithresponse) =>
                {
                    var respon = tastwithresponse.Result;
                    var jsonstring = respon.Content.ReadAsStringAsync();
                    jsonstring.Wait();
                    lst = JsonConvert.DeserializeObject<List<Object>>(jsonstring.Result);
                });
            response.Wait();
            return lst;
        }
    }
}
