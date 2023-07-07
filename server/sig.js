const crypto = require('crypto');
const config = require('./idti.json');

// sha1加密
function sha1(str) {
    let shasum = crypto.createHash("sha1")
    shasum.update(str)
    str = shasum.digest("hex")
    return str
}

/**
 * 生成签名的时间戳
 * @return {字符串}
 */
function createTimestamp() {
    return parseInt(new Date().getTime() / 1000) + ''
}

/**
 * 生成签名的随机串
 * @return {字符串}
 */
function createNonceStr() {
    return Math.random().toString(36).substr(2, 15)
}

/**
 * 对参数对象进行字典排序
 * @param  {对象} args 签名所需参数对象
 * @return {字符串}    排序后生成字符串
 */
function raw(args) {
    var keys = Object.keys(args)
    keys = keys.sort()
    var newArgs = {}
    keys.forEach(function (key) {
        newArgs[key.toLowerCase()] = args[key]
    })

    var string = ''
    for (var k in newArgs) {
        string += '&' + k + '=' + newArgs[k]
    }
    string = string.substr(1)
    return string
}


module.exports  = (params, res) => {
    var ret = {
        jsapi_ticket: params.ticket,
        nonceStr: createNonceStr(),
        timestamp: createTimestamp(),
        url: params.url
    };
    
    var string = raw(ret)
    ret.signature = sha1(string)
    ret.appId = config.id;
    res.send(ret);
}