var modular = require("./mymodule");

var callback = function(err, data) {
    if(err) {
        console.error(err);
    }
    console.log(data);
}

modular(process.argv[2], callback);
