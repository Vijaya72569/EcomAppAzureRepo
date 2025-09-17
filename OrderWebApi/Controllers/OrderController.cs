using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrderWebApi.Models;

namespace OrderWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderDbContext _context;
        //add this for httpclient
        private readonly HttpClient _httpClient;
        public OrderController(OrderDbContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClient = httpClientFactory.CreateClient();
        }
        [HttpPost]
        public async Task<IActionResult> PlaceOrderAsync([FromBody] Order order)
        {
            if (order == null)
                return BadRequest(new { message = "Invalid order data" });
            //add this for userwebapi for username

            var userApiUrl = $"https://userapi2025-awb0btfkgug2gnaq.canadacentral-01.azurewebsites.net/api/users/{order.UserId}"; // replace with actual User API URL
            var response = await _httpClient.GetAsync(userApiUrl);

            if (!response.IsSuccessStatusCode)
                return NotFound(new { message = "User not found in User API" });

            var user = await response.Content.ReadFromJsonAsync<UserDto>();

            order.UserName = user?.FullName;


            //
            order.OrderDate = DateTime.Now;

            _context.Order.Add(order);
         await _context.SaveChangesAsync(); //add await,async

            return Ok(new { message = "Order placed successfully", orderId = order.OrderId, userName = order.UserName }); // display username in alert in pop up msg
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            var orders = _context.Order.ToList();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var order = _context.Order.Find(id);
            if (order == null) return NotFound();
            return Ok(order);
        }
    }
}

