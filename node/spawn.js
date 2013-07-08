var spawn = require('child_process').spawn;
var vlc = spawn('vlc');
vlc.on('exit', function(code){
  console.log('Exit code: ' + code); 
  //EXIT TEST HERE
});
