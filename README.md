# Python Flask Seed

[![License][license-badge]][license-url]

> A python with flask seed project.

# Dependencies

* Install Python 3.5.x (x64)  
[https://www.python.org/downloads/release/python-353/](https://www.python.org/downloads/release/python-353/)

* Install flask

```bash
$ pip3 install flask
```

# Development

```bash
# clone the repository
$ git clone https://github.com/robertoachar/python-flask-seed.git

# change the directory
$ cd python-flask-seed

# run
$ python3 -m python_flask_seed

# output from flask
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
```

# Usage

## Hello

### Request

```json
GET / HTTP/1.1
Host: localhost:5000
```

### Response

```json
200 OK
{
  "message": "Hello from flask!"
}
```

## Welcome

### Request

```json
POST /welcome HTTP/1.1
Host: localhost:5000

{
  "name": "Roberto"
}
```

### Response

```json
200 OK
{
  "message": "Hello Roberto!"
}
```

### Error handling

```json
400 BAD REQUEST
{
  "error": "name is required"
}
```

## Not found

### Request

```
[GET, POST] /not_found HTTP/1.1
Host: localhost:5000
```

### Error handling

```json
404 NOT FOUND
{
  "error": "route not found"
}
```

## Tests

Install dependencies

```bash
$ npm install
```

Run tests

```bash
$ npm test
```

# VSCode

## Install extension Python 0.7.0 from Don Jayamanne

```
ext install python
```

### Install extension dependencies

```bash
# install autopep8
$ pip install autopep8

# install pylint
$ pip install pylint
```

### Set python path

File > Preferences > Settings > User Settings
```json
{
  "python.pythonPath": "C:\\Python35"
}
```

# Author

[Roberto Achar](https://twitter.com/robertoachar)

# License

[MIT](https://github.com/robertoachar/smtc-node-now/blob/master/LICENSE)

[license-badge]: https://img.shields.io/github/license/robertoachar/smtc-node-now.svg
[license-url]: https://opensource.org/licenses/MIT
