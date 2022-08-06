const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSch = new Schema({
    Name:{
        type: String,
        required: true
    },
    Body:{
        type: String,
        required: true
    }
}, {timestamps: true});

const Recipie = mongoose.model('Recipe', recipeSch);
module.exports = Recipie;
