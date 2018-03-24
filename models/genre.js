var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema(
	{
		name:{type:String, min: 3 , max: 100, required: true }
	});

genreSchema
.virtual('url')
.get(function (){
return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', genreSchema);