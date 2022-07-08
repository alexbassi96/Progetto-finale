using Microsoft.EntityFrameworkCore;
using ReviewApp.EF.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReviewApp.EF.BL
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<ReviewEntity> Reviews { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=localhost;Port=8889;Database=Progetto_finale.review;Uid=root;Pwd=root;";
            var mySqlServerVersion = new MySqlServerVersion(new Version(10, 4, 24));

            optionsBuilder.UseMySql(connectionString, mySqlServerVersion);

            base.OnConfiguring(optionsBuilder);
        }
    }
}
