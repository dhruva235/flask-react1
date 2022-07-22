import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle

# Create flask app
flask_app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))
cors = CORS(flask_app)
@flask_app.route("/")
def Home():
    return "Main Route"

@flask_app.route("/predict", methods = ["POST"])
def predict():
    response={
        'prediction':None,
        'status':None
    }
    try:
        requestData=request.json
        float_features = [float(x) for x in requestData.values()]
        features = [np.array(float_features)]
        prediction = model.predict(features)
        response['prediction']=prediction[0]
        response['status']=200
    except:
        response['status']=200
    finally:
        return jsonify(response)
    
if __name__ == "__main__":
    flask_app.run(debug=True)