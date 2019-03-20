const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const config = require('./config/config');


app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded( {expended:true} )); 
app.use(bodyParser.json());
app.use(bodyParser.json({limit:'50mb'}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use('/', require('./router/index'));





app.listen(config.port, () => {
    console.log(`${config.port}端口服务启动成功`);
});














