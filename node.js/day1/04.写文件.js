const fs = require('fs')

fs.writeFile('/hello', 'CAONM', function (error) {
    if (error){
        console.log('文件写入失败');
    }else {
        console.log('文件写入成功');
    }

})