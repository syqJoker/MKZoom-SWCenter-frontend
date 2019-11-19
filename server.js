const express = require('express');
const app = express();
var port = 8000;

/**
 * var app = require('../app');
 * var server = http.createServer(app);
 */
app.get('/',(request,response)=>{
    const str = '街健中心\n四方街头健身 牛逼！\nHello, world!';
    response.send(str);
});


app.listen(port);
console.log('Server running on port 8000');