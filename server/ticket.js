const request = require('request')
const guard_dog = require('guard_dog')
const access_token = require('./access_token')

guard_dog.init('JSAPI_TICKET', (handler) => {
    access_token(access_token => {
        request.get({
            uri: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
            json: true,
            qs: {
                access_token: access_token,
                type: 'jsapi'
            }
        }, (err, res, body) => {
            if (err) {
                console.log(err)
                return
            }
            if (body.errcode) {
                return
            }
            handler(body.ticket, body.expires_in)
        })
    })
})

module.exports = function (callback) {
    guard_dog.get('JSAPI_TICKET', callback)
}