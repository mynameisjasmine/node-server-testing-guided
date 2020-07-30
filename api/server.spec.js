const request = require('supertest')

const server = require('./server.js')

it('should set db environment to testing', function(){
    expect(process.env.DB_ENV).toBe('testing');
});

describe('server', function() {
    describe('GET /', function() {
        it('should return 200 OK', function() {
    // run the server
    // make a GET request to /
     return request(server).get('/')
    .then(res => {
    //see that the http code of response is 200
    expect(res.status).toBe(200)
     });
    });

    it('should return JSON formatted response', function() {
        // run the server
        // make a GET request to /
         return request(server).get('/')
        .then(res => {
        //see that the http code of response is 200
        expect(res.type).toMatch(/json/i)
         });
        });


        // it('should return an api property with the value up inside the body', function() {
        //     // run the server
        //     // make a GET request to /
        //      return request(server).get('/')
        //     .then(res => {
        //     //see that the http code of response is 200
        //     expect(res.type).toMatch(/json/i)
        //      });
        //     });
    
  });
});


// the endpoint return the correct https status code based on input
// the endpoint returns the right data fromat (json in our case)
// the endpoint returns the right data in the body based on input