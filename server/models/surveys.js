<<<<<<< HEAD
let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let question = require('../models/question');

//create survey model class
let surveySchema = mongoose.Schema({
    topic: String,
    user: Schema.Types.ObjectId,
    createDate : { type : Date, default : Date.now },
    expireDate : Date,
    questions : { type: Array, default:[]},
    respones: []
    /*[
                    {
                        questionTopic : String,
                        questionAns : 
                        [
                            { answer : String }
                        ],
                        type : Number
                    }
                ]*/
},
{
  collection: "allSurveys"
}
);

//Ready to go
=======
let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let question = require('../models/question');

//create survey model class
let surveySchema = mongoose.Schema({
    topic: String,
    user: Schema.Types.ObjectId,
    createDate : { type : Date, default : Date.now },
    expireDate : Date,
    questions : { type: Array, default:[]}
    /*[
                    {
                        questionTopic : String,
                        questionAns : 
                        [
                            { answer : String }
                        ],
                        type : Number
                    }
                ]*/
},
{
  collection: "allSurveys"
}
);

//Ready to go
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
module.exports = mongoose.model('surveys', surveySchema);