# Python Flask Seed
A python with flask seed project.

## Dependencies

Install Python 3.5.x (x64)  
[https://www.python.org/downloads/release/python-353/](https://www.python.org/downloads/release/python-353/)

Install flask
```bash
$ pip install flask
```

## Quick Start

```bash
# Clone the repository
$ git clone https://github.com/robertoachar/python-flask-seed.git

# Change the directory
$ cd python-flask-seed

# Run
$ python -m python_flask_seed

# Output from flask
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
```

## Usage

### Hello

#### Request
```json
GET / HTTP/1.1
Host: localhost:5000
```

#### Response
```json
200 OK
{
  "message": "Hello from flask!"
}
```

### Welcome

#### Request
```json
POST /welcome HTTP/1.1
Host: localhost:5000

{
  "name": "Roberto"
}
```

#### Response
```json
200 OK
{
  "message": "Hello Roberto!"
}
```

#### Error handling
```json
400 BAD REQUEST
{
  "error": "name is required"
}
```

### Not found

#### Request

```
[GET, POST] /not_found HTTP/1.1
Host: localhost:5000
```

#### Error handling
```json
404 NOT FOUND
{
  "error": "route not found"
}
```

## VSCode

#### Install extension Python 0.6.0 from Don Jayamanne
```
ext install python
```

#### Install extension dependencies

```bash
# Install autopep8
$ pip install autopep8

# Install pylint
$ pip install pylint
```

#### Set python path

File > Preferences > Settings > User Settings
```json
{
  "python.pythonPath": "C:\\Python35"
}
```

## Author

Roberto Achar
