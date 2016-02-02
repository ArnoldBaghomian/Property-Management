'use strict'

var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	apartment:{type:String, require:true},
	tenant:{type:String, require:true},
	cost:{type:Number, require:true},
	rooms:{type:Number, require:true},
	roomsA:{type:Number, require:true}

});

var Item = mongoose.model('Items', itemSchema);


module.exports = Item; 

