var modular = require("./mymodule");
var callback_count = 2;

var callback = function(err, data) {
    if(err) {
        console.error(err);
    }
    console.log(data);
    callback_count++;
    if (callback_count < process.argv.length){
        modular(process.argv[callback_count], callback);
    }
}

modular(process.argv[callback_count], callback);
