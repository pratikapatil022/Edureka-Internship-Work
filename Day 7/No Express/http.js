var http = require('http');


var server = http.createServer(function(req,res){
    res.write('<h1>Hi to Node Js App</h1>')
    res.end()
})

server.listen(3400);