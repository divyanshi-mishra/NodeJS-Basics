var http=require ('http');

http.createServer(function (request,response) {
response.writeHead(200,{'Content-Type':'text/plain'});
response.end('hello world');
}).listen(3000);
console.log('3000');
