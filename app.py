from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin
from apis.linear_regression import predict, re_process

app = Flask(__name__, static_folder='templates/static')
CORS(app)


@app.route("/")
def main():
    return render_template('index.html')


@app.route("/apis/linreg", methods=['POST'])
@cross_origin()
def linreg():
    data = request.get_json()
    sqft = data['sqft']
    bedrooms = data['bedrooms']
    bathrooms = data['bathrooms']
    is_brick = data['brick']
    neighborhood = data['neighborhood']

    pdata = re_process(sqft, bedrooms, bathrooms, is_brick, neighborhood)

    pred = predict(pdata)

    payload = {
        'price': pred
    }

    return jsonify(payload)


if __name__ == "__main__":
    app.run(debug=True)
