let express = require('express');
let router = express.Router();

let mysql = require('mysql');
const config  = require('../public/javascripts/db_config.js');

/* GET home page. */
router.post('/', function (req, res, next) {

    // フロントからのパラメータ取得
    const userId = req.body.userId;
    const password = req.body.password;

    // コネクションの用意
    const connection = mysql.createConnection(config.mysql_setting);

    connection.query(config.loginSQL, [userId, password],
        function (error, results, fields) {
            console.log(results);
            if (results.length >= 1) {
                res.send('OK');
            } else {
                res.send('NG');
            }
        }
    );
});

module.exports = router;