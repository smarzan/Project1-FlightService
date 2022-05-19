using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMAirlines.Models
{
    public class ConfirmationNumber
    {
        public Guid Id { get; set; }
        //store booking as a string and have a guid passed to it? Apparently SQL expects a string?
        public string Name { get; set; } = String.Empty;
        public int FlightNumber { get; set; }
        public Passenger Owner { get; set; } = null!;

    }
}
