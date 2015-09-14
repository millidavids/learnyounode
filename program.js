var modular = require("./mymodule");

var callback = function(err, data) {
    if(err) {
        console.error(err);
    }
    data.forEach(function(element) {
        console.log(element);
    });
}

modular(process.argv[2], process.argv[3], callback);
