require('dotenv').config();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}

mongoose.set('useCreateIndex', true);

var ItemSchema = new Schema({
    item_name: {type: String, required:true},
    price:{type:Number, required:true},
    countryCode:{countryCode: String},
    item_id:{type: String, required: true},
    imageUrl:{type:String, required: true}
});

ItemSchema.pre('save',function(next){
    next();
});


//return the models to server
module.exports = mongoose.model('Item', ItemSchema);
