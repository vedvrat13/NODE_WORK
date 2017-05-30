var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('views','./views');
app.set('view engine', 'jade');

app.use('/profilePic', express.static('./images'))
app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res) {
	// res.json({ firstname: 'John', lastname: 'Doe' });
	res.render('person',{'youAreUsingJade':true, 'firstname': 'John', 'lastname': 'Doe'})
});

app.get('/api/:user', function(req, res){
	res.render('person',{'youAreUsingJade':true, 'firstname': req.params.user, 'lastname': 'Doe'})
})

var server = app.listen(port, function(){
	console.log('Server is running here: http://localhost:' + port)
});
