
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const characterSchema = new Schema(
{
    name: {type: String}, 
    cond1: {type: Boolean}, 
    cond2: {type: Boolean} 
});

module.exports = model('Character', characterSchema, 'test', false);

 