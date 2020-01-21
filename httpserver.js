var http = require('http');
var app = require('express')();
var http = require('http').Server(app);
var mysql = require('./mysql2.js');
var io = require('socket.io')(http);
app.get('/', function(req, res) {
   res.sendfile('/home/venkatesh/chat application/ sample.html');
});
io.on('connection', function(socket) {
socket.on('setuser', function(data) {
  console.log('data',data);
  mysql.send(data);
})
socket.on('sample',function(value){
   mysql.searchuser(value,function(details){
      console.log(details);
      socket.emit('details',details);
   });
});
});
http.listen(8000);{
    console.log('server listening on 8000')
}