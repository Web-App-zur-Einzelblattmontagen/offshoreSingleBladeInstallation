from flask import Flask, render_template, request, jsonify, make_response


app = Flask(__name__)


@app.route('/', methods=['OPTIONS','POST', 'GET'])
def greeting():
    if request.method == 'OPTIONS': 
        return build_preflight_response()
    elif request.method == 'POST' and request.get_json() != {}: 
        req = request.get_json()
        #Machine Learning hier anstoßen
        print(req)
        return build_actual_response(jsonify({ "response": req }))
    elif request.method == 'GET':
        return "GET"
    else:
        return build_preflight_response()

def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == '__main__':
    app.run(debug=True)