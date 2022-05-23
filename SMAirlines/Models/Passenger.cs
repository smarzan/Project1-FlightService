using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace SMAirlines.Models
{
    public class Passenger
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;    
        public string Job { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public int Age { get; set; }
        public List<ConfirmationNumber> Bookings { get; set; } = null!; //one number for every flight they book 
    }
}