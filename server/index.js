let http = require('http');
let https = require('https');
var url=require('url');
let fs = require('fs');
let express = require("express");

const sig = require('./sig');
const ticket = require('./ticket');

// 配置 https 证书
// 把文件和路径替换为自己的
let options = {
    key: fs.readFileSync('./000000_your_domain.key'),
    cert: fs.readFileSync('./000000_your_domain.pem')
}

let app = express();
app.all("*",function(req,res,next){
    // 设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    // 允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    // 跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() === 'options') {
        res.send(200);  // 让 options 尝试请求快速结束
    } else {
        next();
    }
});

// 获取微信 JSAPI 签名
app.get('/sign', (req, res) => {
    const params = {};
    params.url = url.parse(req.url, true).query.path;
    ticket(ticket => {
        params.ticket = ticket;
    });
    sig(params, res);
});

app.use(express.static("html"));

http.createServer(app).listen(80);
// https.createServer(options, app).listen(443);
