import re
import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
from sklearn.preprocessing import StandardScaler

# Create flask app
flask_app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))
admissionModel= pickle.load(open("model1.pkl", "rb"));
admissionScaler=pickle.load(open("scaler1.pkl","rb"))
cors = CORS(flask_app)
@flask_app.route("/")
def Home():
    return "Main Route"

@flask_app.route("/predictIris", methods = ["POST"])
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
        response['prediction']=round(100*prediction[0])
        response['status']=200
    except:
        response['status']=500
    finally:
        return jsonify(response)


@flask_app.route("/predictAdmission", methods = ["POST"])
def predict1():
    response={
        'prediction':None,
        'status':None
    }
    try:
        requestData=request.json
        print(requestData);
        float_features = [float(x) for x in requestData.values()]
        features = [np.array(float_features)]
        features= admissionScaler.transform(features)
        prediction = admissionModel.predict(features)
        response['prediction']=prediction[0]
        response['status']=200
    except:
        response['status']=500
    finally:
        return jsonify(response)     





    
if __name__ == "__main__":
    flask_app.run(debug=True)