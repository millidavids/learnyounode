var fs = require('fs');
var re = /.txt/;

fs.readdir(process.argv[2], function (err, list){
    filterFileType(list, process.argv[3]);
});

function filterFileType(list, type) {
    var pattern = "[\\w-]+\\." + type;
    for(var i = 0; i < list.length; i++){
        if (list[i].match(new RegExp(pattern))){
           console.log(list[i]);
        }
    }
}
