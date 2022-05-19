using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SMAirlines.Data;
using SMAirlines.Models;

namespace SMAirlines.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConfirmationsController : ControllerBase
    {
        private readonly SMAContext _context;

        public ConfirmationsController(SMAContext context)
        {
            _context = context;
        }

        // GET: api/Confirmations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConfirmationNumber>>> GetConfirmationNumbers()
        {
          if (_context.ConfirmationNumbers == null)
          {
              return NotFound();
          }
            return await _context.ConfirmationNumbers.ToListAsync();
        }

        // GET: api/Confirmations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConfirmationNumber>> GetConfirmationNumber(Guid id)
        {
          if (_context.ConfirmationNumbers == null)
          {
              return NotFound();
          }
            var confirmationNumber = await _context.ConfirmationNumbers.FindAsync(id);

            if (confirmationNumber == null)
            {
                return NotFound();
            }

            return confirmationNumber;
        }

        // PUT: api/Confirmations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConfirmationNumber(Guid id, ConfirmationNumber confirmationNumber)
        {
            if (id != confirmationNumber.Id)
            {
                return BadRequest();
            }

            _context.Entry(confirmationNumber).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConfirmationNumberExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Confirmations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ConfirmationNumber>> PostConfirmationNumber(ConfirmationNumber confirmationNumber)
        {
          if (_context.ConfirmationNumbers == null)
          {
              return Problem("Entity set 'SMAContext.ConfirmationNumbers'  is null.");
          }
            _context.ConfirmationNumbers.Add(confirmationNumber);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConfirmationNumber", new { id = confirmationNumber.Id }, confirmationNumber);
        }

        // DELETE: api/Confirmations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConfirmationNumber(Guid id)
        {
            if (_context.ConfirmationNumbers == null)
            {
                return NotFound();
            }
            var confirmationNumber = await _context.ConfirmationNumbers.FindAsync(id);
            if (confirmationNumber == null)
            {
                return NotFound();
            }

            _context.ConfirmationNumbers.Remove(confirmationNumber);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConfirmationNumberExists(Guid id)
        {
            return (_context.ConfirmationNumbers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
