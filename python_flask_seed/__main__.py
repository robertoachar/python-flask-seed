from flask import Flask, jsonify, make_response, request

app = Flask('python-flask-seed')


@app.route('/welcome', methods=['POST'])
def welcome():
    content = request.get_json(silent=True, force=True)

    try:
        message = 'Welcome %s!' % content['name']
        response = {'message': message}
        return make_response(jsonify(response), 200)

    except Exception as ex:
        response = {'error': 'name is required'}
        return make_response(jsonify(response), 400)


@app.route('/', methods=['GET'])
def hello():
    response = {'message': 'Hello from flask!'}
    return make_response(jsonify(response), 200)


@app.route('/<path:path>', methods=['GET', 'POST'])
def not_found(path):
    response = {'error': 'route not found'}
    return make_response(jsonify(response), 404)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
