using Microsoft.ML.Data;

namespace ITBL.PwModel
{
    public class PasswordData
    {
        [LoadColumn(0)]
        public string Password { get; set; }

        [LoadColumn(1), ColumnName("Label")]
        public bool IsSecure { get; set; }
    }
}
