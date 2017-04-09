<<<<<<< HEAD
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let answerSchema = mongoose.Schema ({ 
    surveyID:Schema.Types.ObjectId,
    surveyTopic : String,
    user: Schema.Types.ObjectId,
    questions:{ type: Array, default:[]}
});


//Ready to go
=======
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let answerSchema = mongoose.Schema ({ 
    surveyTopic : String,
    user: Schema.Types.ObjectId,
    questions:{ type: Array, default:[]}
});


//Ready to go
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
module.exports = mongoose.model('answer', answerSchema);