import flask
from flask import request

app = flask.Flask('Seattle Traffic Cameras')


@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/serve')
def serve():
    filename = request.args['filename']
    if filename == 'bvdot':
        return flask.send_file(r'data\bvdot.json')
    elif filename == 'wsdot':
        return flask.send_file(r'data\wsdot.json')
    elif filename == 'rdot':
        return flask.send_file(r'data\rdot.json')
app.run()