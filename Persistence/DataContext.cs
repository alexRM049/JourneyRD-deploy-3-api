using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions option) : base(option)
        { }


        public DbSet<Destinies> Destinies { get; set; }
        public DbSet<Score> Scores { get; set; }
/*
        protected override void OnModelCreating(ModelBuilder builder)
        {
        }
*/
    }
}
