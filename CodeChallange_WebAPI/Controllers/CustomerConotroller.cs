
using Microsoft.AspNetCore.Mvc;

namespace CodeChallange
{
    [ApiController]
    [Route("[controller]")]
    public class CustomersController : Controller
    {
        private readonly ICustomerService _CustomerService;

        public CustomersController(ICustomerService CustomerService)
        {
            _CustomerService = CustomerService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _CustomerService.GetCustomerList();

            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetCustomer(int id)
        {
            var result = await _CustomerService.GetCustomer(id);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody] Customer Customer)
        {
            var result = await _CustomerService.CreateCustomer(Customer);

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCustomer([FromBody] Customer Customer)
        {
            var result = await _CustomerService.UpdateCustomer(Customer);

            return Ok(result);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var result = await _CustomerService.DeleteCustomer(id);

            return Ok(result);
        }
    }
}