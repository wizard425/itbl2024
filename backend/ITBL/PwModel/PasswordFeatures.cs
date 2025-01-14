using Microsoft.ML.Data;

namespace ITBL.PwModel
{
    public class PasswordFeatures
    {
        [ColumnName("PredictedLabel")]
        public bool IsSecure { get; set; }
        public float Probability { get; set; }
        public float Score { get; set; }
    }
}
