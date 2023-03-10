from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from apis.linear_regression import predict, re_process

app = Flask(__name__, static_folder='templates/static')
CORS(app, supports_credentials=True)


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response


@app.route("/")
def main():
    return render_template('index.html')


@app.route("/apis/linreg", methods=['POST'])
def linreg():
    if request.method == 'POST':
        sqft = request.form['sqft']
        bedrooms = request.form['bedrooms']
        bathrooms = request.form['bathrooms']
        is_brick = request.form['brick']
        neighborhood = request.form['neighborhood']

        pdata = re_process(sqft, bedrooms, bathrooms, is_brick, neighborhood)

        pred = predict(pdata)

        payload = {
            'price': pred
        }
        return jsonify(payload)


if __name__ == "__main__":
    app.run(debug=True)
