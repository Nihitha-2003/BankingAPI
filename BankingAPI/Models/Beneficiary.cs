using System.ComponentModel.DataAnnotations;

namespace BankingAPI.Models
{
    public enum BeneficiaryStatus
    {
        Pending,
        Approved,
        Rejected
    }

    public class Beneficiary
    {
        [Key]
        public int BeneficiaryId { get; set; }

        [Required]
        public string NickName { get; set; }

        [Required]
        public string AccountNumber { get; set; }

        [Required]
        public string BankName { get; set; }

        [Required]
        public string IFSC { get; set; }

        [Required]
        public string CustomerCRN { get; set; }  // Link to customer

        public BeneficiaryStatus Status { get; set; } = BeneficiaryStatus.Pending;

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
