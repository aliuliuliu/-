var fs = require('fs')

var path = require('path')

fs.readFile(path.join(__dirname,'./a.txt'),function(err,data){
    if(err){
        throw err
    }
    console.log(data.toString());
})
