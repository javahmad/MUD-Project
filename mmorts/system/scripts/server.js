var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createSeerver(function(request,response)
{
    var path = url.parse(request.url).pathname;
    
    switch(path)
    {
        case '/':
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write('hello world');
            response.end;
            break();
        case '/socket.html':
            fs.readFile(__dirname + path, function(error,data) {
               if(error)
               {
                   response.writeHead(404);
                   response.write("opps this doesn't exist - 404");
                   response.end();
               } 
               else
               {
                        
               }
            });
    }
    
});
server.listen(8001);
