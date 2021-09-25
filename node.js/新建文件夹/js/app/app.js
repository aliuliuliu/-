var fs = require('fs')

var path = require('path')

fs.readFile(path.join(__dirname, '../../css/b.txt'), function (err, data) {

    if (err) {
        throw err
    }
    console.log(data.toString());
})