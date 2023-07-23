using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string userName { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required] 
        public string lastName { get; set; }
        [Required]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$", ErrorMessage = "La contraseña debe incluir una letra en mayusculas, una en minusculas y un número, esta misma debe de ser de 8 a 16 caracteres.")]
        public string password { get; set; }
        public string country {get; set;}
        public string address {get; set;}
        public DateTime birthDate {get; set;}
        public string city {get; set;}
        public string gender {get; set;}

    }
}
