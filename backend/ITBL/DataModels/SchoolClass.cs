namespace ITBL.DataModels
{
    public class SchoolClass : BaseEntity
    {

        public string Name { get; set; } = "";
        public string? Description { get; set; }

        public ICollection<User> Users { get; } = new List<User>();

    }
}
