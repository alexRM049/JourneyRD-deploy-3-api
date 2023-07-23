using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Score
    {
        public int Id { get; set; }
        public Destinies destinies { get; set; }
        public AppUser User { get; set; }
        public int Value { get; set; }
    }
}
