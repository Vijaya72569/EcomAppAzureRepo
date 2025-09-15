using Microsoft.EntityFrameworkCore;

namespace OrderWebApi.Models
{
    public class OrderDbContext:DbContext
    {
        public OrderDbContext(DbContextOptions<OrderDbContext> options) : base(options) { }
      //  public DbSet<User> Users { get; set; }
        public DbSet<Order> Order {  get; set; }
    }
}
