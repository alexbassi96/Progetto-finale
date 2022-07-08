using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReviewApp.EF.Entity
{
    [Table("Review")]
    public class ReviewEntity
    {
        [Column("id"), Key]
        public int Id { get; set; }

        [Column("recensione"), Required, StringLength(500), DataType(DataType.Text)]
        public string Recensione { get; set; }
    }
}
