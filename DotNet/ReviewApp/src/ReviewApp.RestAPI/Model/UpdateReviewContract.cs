namespace ReviewApp.RestAPI.Model
{
    public class UpdateReviewContract
    {
        public int userId { get; set; }
        public int movieId { get; set; }
        public string Recensione { get; set; }
    }
}
