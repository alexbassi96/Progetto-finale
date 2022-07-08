using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReviewApp.Core.Model
{
    public class Review
    {
        //private readonly int _id;
        public const int MAX_CHAR_REVIEW = 160;

        public int Id { get; set; }
        /*{
            get
            {
                return _id;
            }
        }*/

        public string Recensione { get; set; }
        public Review(int id, string recensione)
        {
            Id = id;
            Recensione = recensione;
        }

        public Review()
        {
        }
    }
}
