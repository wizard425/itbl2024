using Microsoft.EntityFrameworkCore;
using Microsoft.ML;

namespace ITBL.PwModel
{
    public class PWModelService : IPwModelService
    {
        private readonly ITransformer model;
        private readonly MLContext _mlContext;
        private readonly PredictionEngine<PasswordData, PasswordFeatures> _predictionEngine;
        public PWModelService() {

            _mlContext = new MLContext();
            //Define DataViewSchema for data preparation pipeline and trained model
            DataViewSchema modelSchema;

            // Load trained model
            model = _mlContext.Model.Load("firstModel.zip", out modelSchema);
            _predictionEngine = _mlContext.Model.CreatePredictionEngine<PasswordData, PasswordFeatures>(model);

        }


        public PasswordFeatures ExecutePrediction(string password)
        {

            PasswordData statement = new PasswordData
            {
                Password = password
            };

            return _predictionEngine.Predict(statement);
        }

    }
}
