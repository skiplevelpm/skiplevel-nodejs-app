var request = require('supertest');
var app = require('./src/index.js');

describe('GET /', function() {
	it('displays "Great job on this assignment!"', function(done) {
		// The line below is the core test of our app.
		request(app).get('/').expect('Great job on this assignment!', done);
	});
});