using SMAirlines.Models;
using Microsoft.EntityFrameworkCore; 

namespace SMAirlines.Data
{
    public class SMAContext : DbContext 
    {
        public SMAContext()
        {

        }

        public SMAContext(DbContextOptions<SMAContext> options) : base(options)
        {

        }

        public DbSet<Passenger> Passengers { get; set; } = null!;
        public DbSet<Flight> Flights { get; set; } = null!;
        public DbSet<ConfirmationNumber> ConfirmationNumbers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Passenger>(passenger =>
            {
                passenger.HasMany(p => p.Bookings)
                         .WithOne(p => p.Owner);
            });

            modelBuilder.Entity<Flight>(flight =>
            {
                flight.HasMany(f => f.Passengers)
                .WithOne(); 
            });
        }
    }
}
