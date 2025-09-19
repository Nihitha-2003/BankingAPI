using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankingAPI.Data;
using BankingAPI.Models;
using Microsoft.AspNetCore.Cors;

namespace BankingAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("OpenForAll")]
    public class BeneficiariesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BeneficiariesController(AppDbContext context)
        {
            _context = context;
        }

        // POST: Add new beneficiary
        [HttpPost]
        public async Task<IActionResult> AddBeneficiary([FromBody] Beneficiary beneficiary)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            beneficiary.Status = BeneficiaryStatus.Pending;
            _context.Beneficiaries.Add(beneficiary);
            await _context.SaveChangesAsync();
            return Ok(beneficiary);
        }

        // GET: Get all beneficiaries for a customer
        [HttpGet("{customerCRN}")]
        public async Task<IActionResult> GetBeneficiaries(string customerCRN)
        {
            var list = await _context.Beneficiaries
                .Where(b => b.CustomerCRN == customerCRN)
                .ToListAsync();
            return Ok(list);
        }

        // PUT: Admin approves/rejects
        [HttpPut("update-status/{id}")]
        public async Task<IActionResult> UpdateStatus(int id, [FromQuery] BeneficiaryStatus status)
        {
            var beneficiary = await _context.Beneficiaries.FindAsync(id);
            if (beneficiary == null) return NotFound("Beneficiary not found");

            beneficiary.Status = status;
            await _context.SaveChangesAsync();
            return Ok(beneficiary);
        }
    }
}

