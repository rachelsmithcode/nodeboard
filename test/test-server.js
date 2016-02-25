var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

// describe('tasks', function(){

//   it('should respond with "Tasks" when loading up the first page', function(done){
//     chai.request(server)
//     .get('/tasks')
//     .end(function(err, res){
//       res.should.have.status(200);
//       res.should.be.json;
//       res.should.include("Tasks");
//       done();
//     });
//   });
// });


describe('task list', function(){

  it('should list all tasks on /tasks GET', function(done){
    chai.request(server)
    .get('/tasks')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
  });


});
