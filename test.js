var express = require('express');
var app = express();

var mysql  = require('mysql');


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/', function (req, res) {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        port: '3306',
        database: 'yu'
    });

    connection.connect();

    var  sql = 'SELECT * FROM t_users';
//查
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }

        // console.log('--------------------------SELECT----------------------------');
        // console.log(result);
        // console.log('------------------------------------------------------------\n\n');
        res.end(JSON.stringify(result));
    });

    connection.end();
    // var response = {
    //     "first_name":'chendan',
    //     "last_name":'xiaochendan'
    // };
    // res.send('Hello World');
    // res.end(JSON.stringify(response));
})

app.get('/getInfo', function (req, res) {
    var response = {
        "first_name":'aaaaa',
        "last_name":'bbbbb'
    };
    // res.send('Hello World');
    res.end(JSON.stringify(response));
})



var server = app.listen(8081, function () {


    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})