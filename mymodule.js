var http = require("http");

module.exports = function(url, callback) {
    http.get(url, function(response) {
        response.setEncoding('utf-8');
        response.on('error', function(err) {
            return callback(err);
        });
        var dataArray = [];
        response.on('data', function(data) {
            dataArray.push(data);
        });
        response.on('end', function(end) {
            callback(null, dataArray.join('').length);
            return callback(null, dataArray.join(''));
        });
    });
}
