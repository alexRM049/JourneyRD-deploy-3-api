namespace Domain
{
    public class Destinies
    {
        public Guid Id { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public string region { get; set; }
        public string province { get; set; }
        public string PhoneNumber { get; set; }
        public string city { get; set; }
        public string Description { get; set; }
        public int MaxPeople { get; set; }
        public double budget { get; set; }
        public double destinyLong { get; set; }
        public double destinyLat { get; set; }
        public ICollection<Comment> comments { get; set;} = new List<Comment>();

    }
}
