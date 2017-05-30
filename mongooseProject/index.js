var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

// TO CONFIGURE THE DB DETAILS
var db = mongoose.connection;
db.once('open', function(){
    console.log('Connection Opened');
});

// Create the Schema 
var KittenSchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', KittenSchema);

var cute = Kitten({name:'Cute'});
console.log(cute);

db.close();
