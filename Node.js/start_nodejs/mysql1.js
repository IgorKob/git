////                     create database
// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "asdasdasd"
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a database named "mydb":*/
//   con.query("CREATE DATABASE mykim", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });








////                      create table     unsigned(+number)      DEFAULT ''
// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "asdasdasd",
//   database: "mykim"
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a table named "customers":*/
//   var qq = "CREATE TABLE mytable2 (id INT(22) unsigned  AUTO_INCREMENT PRIMARY KEY NOT NULL, name VARCHAR(255) NOT NULL, last VARCHAR(255) DEFAULT '')";
//   //var qq = "ALTER TABLE mytable ADD COLUMN id2 INT";    //Add primary key to an existing table:
//   con.query(qq, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });






////           insert element
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "asdasdasd",
//   database: "mykim"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var qq = "INSERT INTO mytable2(name, last) VALUES ('kim', 'kobki')";
//   con.query(qq, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });









// //              insert values ?
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "INSERT INTO mytable(id, name, last) VALUES ? ";
//   var qv = [
//     [2, 'qwe','ewq'],
//     [3, 'asd','dsa'],
//     [4, 'zxc','cxz']
//   ];
//   con.query(qq, [qv], function(err, result) {
//     if(err) throw err;
//     console.log('Query ok' + result.affectedRows);
//   });
// });












// //             select all
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "SELECT * FROM mytable";
//   //var qq = "ALTER TABLE mytable ADD COLUMN id3 INT(44) AUTO_INCREMENT PRIMARY KEY NOT NULL";
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);         //console.log(result[1].name);  //array results
//   });
// });













// //    select where name='asd'
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "SELECT * FROM mytable WHERE name='asd'";
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });










////    select where name like
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "SELECT * FROM mytable WHERE name LIKE '_s%'";
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });









// //    Коли значення запиту є змінними, наданими користувачем, вам слід уникати значень.
// //Це робиться для того, щоб запобігти ін'єкціям SQL, що є поширеною технікою злому в
// //Інтернеті для знищення або неправильного використання вашої бази даних.
// //Уникайте значень запитів, використовуючи mysql.escape() метод:
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qu = 'asd';
//   var qq = "SELECT * FROM mytable WHERE name= " + mysql.escape(qu);
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });




// //Уникайте значень запитів, використовуючи ? метод заповнення :
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qu = 'asd';
//   var qi = '1';
//   var qq = "SELECT * FROM mytable WHERE name= ? OR id= ? ";
//   con.query(qq, [qu, qi], function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });











// //    select ORDER BY
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "SELECT * FROM mytable ORDER BY id3 DESC";
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });














// //    delete
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "DELETE FROM mytable WHERE name='zxc'";
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });








// //      drop table            Якщо таблиця не існує   IF EXISTS
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "DROP TABLE mytable";       //var qq = "DROP TABLE IF EXISTS customers"; Якщо таблиця не існує, ви можете скористатися ключовим словом IF EXISTS, щоб уникнути помилки
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });











////           UPDATE
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "UPDATE mytable SET name='oleg' WHERE name='qwe'";
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });



// //                 limit       Примітка: "OFFSET 2", означає починати з третьої позиції, а не з другої!
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "SELECT * FROM mytable LIMIT 5";       //"SELECT * FROM customers LIMIT 5 OFFSET 2"  Почніть з позиції 3 та поверніть наступні 5 записів
//// var qq = "SELECT * FROM mytable LIMIT 2, 5";           ///Почніть з позиції 3 та поверніть наступні 5 записів:
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });















////              INNER JOIN - Виберіть записи із збігом у обох таблицях.   (LEFT JOIN, RIGHT JOIN)
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'asdasdasd',
//   database: 'mykim'
// });
// con.connect(function(err) {
//   if(err) throw err;
//   console.log('Connect ok');
//   var qq = "SELECT t1.name AS name1, t2.name AS name2 FROM mytable AS t1 INNER JOIN mytable2 AS t2 ON t1.id3 = t2.id";
//   //var qq = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
//   con.query(qq, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });
