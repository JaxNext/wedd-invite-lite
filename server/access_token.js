const request = require('request')
const guard_dog = require('guard_dog')
const config = require('./idti.json');
// 加载这个模块的时候给 ACCESS_TOKEN 这个键名初始化
guard_dog.init('ACCESS_TOKEN', (handler) => {
    request.get({
        uri: 'https://api.weixin.qq.com/cgi-bin/token',
        json: true,
        qs: {
            grant_type: 'client_credential',
            appid: config.id, 
            secret: config.scrt
        }
    }, (err, res, body) => {
        if (err) {
            console.log(err)
            return
        }
        if (body.errcode) {
            return
        }
        handler(body.access_token, body.expires_in)
    })
})
module.exports = function (callback) {
    guard_dog.get('ACCESS_TOKEN', callback)
}
