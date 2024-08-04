const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // MySQLデータベースへの接続情報
  const connection = mysql.createConnection({
    host: "172.20.64.1", //"localhost",
    port: 3306,
    user: "admin",
    password: "adminpass",
    database: "department_store",
  });

  // データ取得クエリの実⾏
  connection.query("SELECT * FROM t_item", (error, results) => {
    if (error) {
      console.log("クエリエラー: " + error.stack);
      return;
    }
    let work = results;
    while (work.length % 3 != 0) {
      work = [...work, 
        {
          ITEMID: 0,
          ORIGINALID: '',
          ITEMNAME: '',
          CATEGORY: 0,
          PRICE: 0,
          EXPLANATION: '',
          IMAGENAME: 'default.png'
        }
      ]
    }
    // 取得した結果をdataに設定
    let data = {
      title: "Itemテーブル",
      content: work,
    };
    res.render("index", data);
  });
 
  // MySQLデータベースとの接続を終了する
  connection.end();

  //res.render('index', { title: 'Express' });
});

module.exports = router;
