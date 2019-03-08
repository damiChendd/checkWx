var express = require('express');
var app = express();
var crypto = require('crypto');

app.get('/wx', function (req, res) {
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    var echostr = req.query.echostr;
    var token = "chendan";
    var tmp = [token,timestamp,nonce].sort().join("");
    var currSign = crypto.createHash("sha1").update(tmp).digest("hex");

    if(currSign == signature){
        // return echostr;
        res.end(echostr);
    }else{
        // return "";
        res.end("空");
    }

});

var server = app.listen(80, function () {

    var host = server.address().address
    var port = server.address().port

    // http://132.232.61.73/wx?signature=1&timestamp=2&nonce=3&echostr=4444444

})