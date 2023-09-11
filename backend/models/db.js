const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "svc.sel5.cloudtype.app",
  port: "32595",
  user: "jadest03",
  password: "Wjsalsrb0725!", //비번
  database: "Todo", //db명
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("데이터베이스 연결됨.");
  }
});

module.exports = connection;
