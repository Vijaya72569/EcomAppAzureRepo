namespace OrderWebApi.Models
{
    public class Order
    {

        public int OrderId { get; set; }
        public int UserId { get; set; }
        public string? UserName { get; set; }
        public decimal TotalPrice { get; set; }
        public DateTime OrderDate { get; set; }
        public string? Status { get; set; }
    }
}
