let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let answer = require('../models/answer');

    let questionSchema = new Schema({
        questionTopic : String,
        questionAns : [answer],
        type : Number
    });

//Ready to go
module.exports = mongoose.model('answer', questionSchema);