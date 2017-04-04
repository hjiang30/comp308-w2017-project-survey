let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//create survey model class
let surveySchema = new Schema({
    topic: String,
    user: Schema.Types.ObjectId,
    createDate : { type : Date, default : Date.now },
    expireDate : Date,
    questions : [
                    {
                        questionTopic : String,
                        questionAns : [],
                        type : Number
                    }
                ]
},
{
  collection: "allSurveys"
}
);

//Ready to go
module.exports = mongoose.model('surveys', surveySchema);