using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SMAirlines.Models;
using Microsoft.EntityFrameworkCore;

namespace SMAirlines.Data
{
    public static class SMAInitializer
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new SMAContext(serviceProvider.GetRequiredService<DbContextOptions<SMAContext>>()))
            {
                context.Database.EnsureCreated();
                //context.Database.EnsureDeleted(); 

                if (!context.Flights.Any())
                {
                    var flightsToAdd = new Flight[]
                    {
                    new Flight{FlightNumber=2066,DepartureDate=DateTime.Parse("05/28/2022"),ArrivalDate=DateTime.Parse("05/28/2022"),DepartureTime=DateTime.Parse("03:30 PM"),ArrivalTime=DateTime.Parse("6:20 PM"),DepartureAirport="MCO",ArrivalAirport="DEN",PassengerLimit=120},
                    new Flight{FlightNumber=4823,DepartureDate=DateTime.Parse("05/29/2022"),ArrivalDate=DateTime.Parse("05/30/2022"),DepartureTime=DateTime.Parse("11:30 PM"),ArrivalTime=DateTime.Parse("2:00 AM"),DepartureAirport="DEN",ArrivalAirport="PHX",PassengerLimit=120}

                    };

                    context.Flights.AddRange(flightsToAdd);
                    context.SaveChanges();
                }

                if (!context.Passengers.Any())
                {
                    var passengersToAdd = new Passenger[]
                    {
                    new Passenger{Name = "John Birb", Job = "Doctor", Email = "jbirb@gmail.com", Age = 52 },
                    new Passenger{Name = "Jen Harding", Job = "Baker", Email = "jharding@outlook.com", Age = 33 },
                    new Passenger{Name = "Serena Adams", Job = "Artist", Email = "sadams@wdesigns.com", Age = 26 }
                    };

                    context.Passengers.AddRange(passengersToAdd);
                    context.SaveChanges();
                }

                if (!context.ConfirmationNumbers.Any())
                {
                    var confirmationsToAdd = new ConfirmationNumber[]
                    {
                    new ConfirmationNumber{Name="Serena Adams",FlightNumber=4823},
                    new ConfirmationNumber{Name="John Birb",FlightNumber=2066}
                    };

                    context.ConfirmationNumbers.AddRange(confirmationsToAdd);
                    context.SaveChanges();
                }

            }
        }
    }
}

