var http = require('http'),
    map = require('through2-map'),
    url = require('url'),
    port = process.argv[2];

var routes = {
    "/api/parsetime": function(parsedUrl){
        date = new Date(parsedUrl.query.iso);
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    },
    "/api/unixtime": function(parsedUrl){
        return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
    }
};

var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url, true);
    resource = routes[parsedUrl.pathname];
    if (resource){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(resource(parsedUrl)));
    }else{
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);
