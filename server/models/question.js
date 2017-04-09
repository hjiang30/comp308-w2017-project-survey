<<<<<<< HEAD
let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let answer = new Schema ({ answer : String });

    let questionSchema = mongoose.Schema({
        
        questionTopic : String,
        questionAns : [{ answer : String }],
        type : Number
    });

//Ready to go
=======
let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let answer = new Schema ({ answer : String });

    let questionSchema = mongoose.Schema({
        questionTopic : String,
        questionAns : [{ answer : String }],
        type : Number
    });

//Ready to go
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
module.exports = mongoose.model('question', questionSchema);