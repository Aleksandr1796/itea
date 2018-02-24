var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3102;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  //
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  //
  socket.on('customEventClient', function(boom){
    io.emit('customEvent', boom );
  });

});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
