using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace SMAirlines.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public int FlightNumber { get; set; }
        public DateTime DepartureDate { get; set; } = new DateTime(); 
        public DateTime ArrivalDate { get; set; } = new DateTime();
        public DateTime DepartureTime { get; set; } = new DateTime();
        public DateTime ArrivalTime { get; set; } = new DateTime();
        public string DepartureAirport { get; set; } = String.Empty;
        public string ArrivalAirport { get; set; } = String.Empty;
        public int PassengerLimit { get; set; } = 0;
        public List<ConfirmationNumber> Bookings { get; set; } = null!; 
    }
}
