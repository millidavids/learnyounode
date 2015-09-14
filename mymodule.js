var http = require("http");

module.exports = function(url, callback) {
    http.get(url, function(response) {
        response.setEncoding('utf-8');
        response.on('error', function(err) {
            return callback(err);
        });
        response.on('data', function(data) {
            return callback(null, data);
        });
    });
}
