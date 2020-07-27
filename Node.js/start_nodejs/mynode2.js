var http = require('http');
var fs = require('fs');
var events = require('events');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
var readStream = fs.createReadStream('./myfile.txt');
readStream.on('open', function() {
  res.write('1. my read stream <hr>');
});



var eventEmitter = new events.EventEmitter();
var myEventHandler = function () {      //Створіть обробник подій:
  res.write('2. I hear a scream!<hr>');
}
eventEmitter.on('scream', myEventHandler);      //Призначте менеджера подій до події:
eventEmitter.emit('scream');             //Запустіть подію "scream":




}).listen(8080);
