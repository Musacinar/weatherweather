using Microsoft.AspNetCore.Mvc;

namespace hava_durumu.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Class : ControllerBase
    {
        [HttpGet]
        [Route("number")]
        public string Get()
        {
            int number = 10;
            Console.WriteLine(number);
            return number.ToString();
            //return;
        }
    }
}
