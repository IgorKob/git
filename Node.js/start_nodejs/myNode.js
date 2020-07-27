var http = require("http");
var dt = require("./myModule");
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': "text/html"});
  res.write("my module date:" + dt.myDateTime());
  res.write('<h1>igor kob</h1>');
  res.write(req.url);
  res.write("<hr>");

  var q = url.parse(req.url, true).query;
  var txt = q.name + " " + q.last;           //localhost8080?name=igor&last=kob
  res.write(txt);
  res.write("<hr>");


  var adres = 'http://localhost8080/myNode.js?name2=igor2&last2=kob2';
  var qq = url.parse(adres, true);
  res.write(qq.host + '<br>');
  res.write(qq.pathname + '<br>');
  res.write(qq.search + '<br>');
  var t = qq.query;
  res.write( t.name2);
  res.write("<hr>");


  res.write(uc.upperCase('<hr>Hello uppercase<hr>'));   //upperCase



  res.end();
}).listen(8080);
