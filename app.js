var http = require('http');
var emp = require('./employees');
var port = 3000;
var myFunction = function(request,response){
    response.writeHead(200, {'content-type':'text/plain'});
    response.write(emp.myString);
    response.end();
};
var server = http.createServer(myFunction);
server.listen(port);
console.log("server is working on port no :"+port);
