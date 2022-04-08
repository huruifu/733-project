from flask import Flask
from flask import request
from flask import Response
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import simplejson as json
from joblib import load
import pandas as pd
import boto3
import io
import os

app = Flask(__name__, static_folder="fireforest-app/build", static_url_path="")
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/fire-reason-predict/group", methods=["POST"])
@cross_origin()
def predict_reason_group():
    s3 = boto3.client('s3', 
                      aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"), 
                      aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"), 
                      region_name="us-west-2")
    bucket_name = os.getenv("BUCKET_NAME")
    s3_object = "model_grouped_rf.joblib"
    obj = s3.get_object(Bucket=bucket_name, Key=s3_object)
    json_data = request.get_json()
    model = load(io.BytesIO(obj['Body'].read()))
    df = pd.DataFrame(data=json_data)
    prediction = model.predict(df)
    return Response(json.dumps({"class": f"{prediction[0]}"}),
                        status=200,
                        mimetype='application/json')
    
    
@app.route("/fire-reason-predict/non-group", methods=["POST"])
@cross_origin()
def predict_reason_non_group():
    s3 = boto3.client('s3', 
                      aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"), 
                      aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"), 
                      region_name="us-west-2")
    bucket_name = os.getenv("BUCKET_NAME")
    s3_object = "model_nongrouped_rf.joblib"
    obj = s3.get_object(Bucket=bucket_name, Key=s3_object)
    json_data = request.get_json()
    model = load(io.BytesIO(obj['Body'].read()))
    df = pd.DataFrame(data=json_data)
    prediction = model.predict(df)
    return Response(json.dumps({"class": f"{prediction[0]}"}),
                        status=200,
                        mimetype='application/json')
    
@app.route("/fire-size-predict", methods=["POST"])
@cross_origin()
def predict_size():
    s3 = boto3.client('s3', 
                      aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"), 
                      aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"), 
                      region_name="us-west-2")
    bucket_name = os.getenv("BUCKET_NAME")
    s3_object = "model_firesizeclass_rf.joblib"
    obj = s3.get_object(Bucket=bucket_name, Key=s3_object)
    json_data = request.get_json()
    print(json_data)
    model = load(io.BytesIO(obj['Body'].read()))
    df = pd.DataFrame(data=json_data)
    prediction = model.predict(df)
    return Response(json.dumps({"class": f"{prediction[0]}"}),
                        status=200,
                        mimetype='application/json')
    
@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")    
    


if __name__ == "__main__":
    app.run()