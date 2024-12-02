namespace ITBL.DataModels
{
    public class User : BaseEntity
    {

        public string Name { get; set; } = string.Empty;
        public int Points { get; set; }

        public int? SchoolClassId { get; set; }

    }
}
