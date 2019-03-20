const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded( {expended:true} )); 
app.use(bodyParser.json());
app.use(bodyParser.json({limit:'50mb'}));



app.use('/', require('./router/index'));




app.listen(3000, () => {
    console.log('3000端口服务启动成功');
});














