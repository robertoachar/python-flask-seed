'use strict';

var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:5000');

describe('Python Flask Seed Tests', () => {

  describe('Route /', () => {

    it('should return a message from flask', (done) => {
      server
        .get('/')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          res.body.message.should.equal('Hello from flask!');
          done();
        });
    });

  });

  describe('Route /welcome', () => {

    it('should return "Hello ${name}!" when POST with name', (done) => {
      server
        .post('/welcome')
        .send({ 'name': 'Roberto' })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          res.body.message.should.equal('Welcome Roberto!');
          done();
        });
    });

    it('should return an error when POST without the name', (done) => {
      server
        .post('/welcome')
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          res.body.error.should.equal('name is required');
          done();
        });
    });

  });

  describe('Route /not_found', () => {

    it('should return a 404 when GET', (done) => {
      server
        .get('/not_found')
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);

          res.body.error.should.equal('route not found');
          done();
        });
    });

    it('should return a 404 when POST', (done) => {
      server
        .post('/not_found')
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);

          res.body.error.should.equal('route not found');
          done();
        });
    });

  });

});
