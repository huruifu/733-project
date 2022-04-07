from distutils.log import debug
from flask import Flask
from flask import request
from flask import Response
# from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import simplejson as json
from joblib import load
import pandas as pd

app = Flask(__name__, static_folder="fireforest-app/build", static_url_path="")
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/fire-reason-predict/group", methods=["POST"])
@cross_origin()
def predict_reason_group():
    json_data = request.get_json()
    print(json_data)
    model = load('model/model_grouped_rf.joblib')
    df = pd.DataFrame(data=json_data)
    print(df)
    prediction = model.predict(df)
    print(prediction)
    return Response(json.dumps({"class": f"{prediction[0]}"}),
                        status=200,
                        mimetype='application/json')
    
    
@app.route("/fire-reason-predict/non-group", methods=["POST"])
@cross_origin()
def predict_reason_non_group():
    json_data = request.get_json()
    print(json_data)
    model = load('model/model_nongrouped_rf.joblib')
    df = pd.DataFrame(data=json_data)
    print(df)
    prediction = model.predict(df)
    print(prediction)
    return Response(json.dumps({"class": f"{prediction[0]}"}),
                        status=200,
                        mimetype='application/json')
    
@app.route("/fire-size-predict", methods=["POST"])
@cross_origin()
def predict_size():
    json_data = request.get_json()
    print(json_data)
    model = load('model/model_nongrouped_rf.joblib')
    df = pd.DataFrame(data=json_data)
    print(df)
    prediction = model.predict(df)
    print(prediction)
    return Response(json.dumps({"class": f"{prediction[0]}"}),
                        status=200,
                        mimetype='application/json')    
    
# @app.route("/")
# @cross_origin()
# def serve():
#     return send_from_directory(app.static_folder, "index.html")    
    


if __name__ == "__main__":
    app.run()