using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public DateTime birthDate { get; set; }
        public string country { get; set; }
        public string city { get; set; }
        public string address { get; set; }
        public string gender { get; set; }
        public bool Admin { get; set; }
        public ICollection<Comment> comments { get; set;} = new List<Comment>();

        // public ICollection<Destinies> favoriteDestiny {get; set;} = new List<Destinies>();
    }
}
