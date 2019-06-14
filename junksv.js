// nodeのコアモジュールのrequire宣言
var http        = require('http');
var fs          = require('fs');
var config      = require('./conf/config.js');
var server      = http.createServer();

// サーバメイン処理
server.on('request', function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    switch (req.url) {
        case '/memo':
            msg = 'memo';
            break;
        case '/test':
            msg = 'test';
            break;
        default:
            msg = 'page not found';
            break;
    }
    res.write('request from: ' + req.url);
    res.write('\n\n');
    res.write(msg);
    res.end();
});

// port設定
server.listen(config.port);

console.log('ポート番号: ' + config.port);

