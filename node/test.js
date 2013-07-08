// To start vlc with telnet remote control:
// ./VLC --extraintf rc --rc-host 0.0.0.0:3000
//
// To connect to multiple vlc's
// node vlcrc.js host1:3000 host2:3000
 
var net = require('net');
var readline = require('readline');
 
//addresses of servers
var addresses = [];
for (var i = 2; i < process.argv.length; i++) {
  var parts = process.argv[i].trim().split(':');
  addresses.push({ port: parseInt(parts[1]), host: parts[0] });
}
 
//connect to each server
var sockets = [];
addresses.forEach(function (address) {
  var socket = net.createConnection(address.port, address.host);
  socket.on('connect', function() { console.log('connected to ' + address.host + ' on port ' + address.port) });
  socket.on('end', function() { console.log(address.host + ':' + address.port + ' ended') });
  socket.on('data', function(data){ console.log(data.toString()); });
  sockets.push(socket);
});
 
//relay command line input to each server
var rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(line) {
  var command = line.trim();
  sockets.forEach(function (socket) { socket.write(command + '\n'); });
  if (command === 'quit')
  {
    rl.close();
    process.stdin.destroy();
  }
  rl.prompt();
}).on('close', function() {
  sockets.forEach(function (socket) { socket.end('quit\n'); });
  //process.exit(0);
});
rl.prompt();
