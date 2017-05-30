var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Hello1');
});

emtr.on('greet', function(){
    console.log('Hello2');
});

emtr.emit('greet');
