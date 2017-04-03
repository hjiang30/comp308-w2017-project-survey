let mongoose = require('mongoose');

//import surveys model
let survey = require('../models/surveys');
let answerSchema = require('../models/answer');
let questionSchema = require('../models/question');




// read and display the survey list
module.exports.ReadSurveyList = (req,res)=> 
{
    //get today's date
    let currentDate = new Date();
    //only show the expireDate is after currentDate
    survey.find({ expireDate: { $gt : currentDate }},(err,surveys)=>{
        if(err){
            return console.error(err);
        }
        else
        {
            res.render('surveys/index',{
                title:'Surveys',
                surveys: surveys,
                displayName:req.user.displayName
            })
        }
    });
}

// Display create survey ejs page
module.exports.DisplayAdd = (req,res) => {
    res.render('surveys/details', {
    title: "Add a new Survey",
    surveys: '',
    displayName: req.user.displayName
  });
}

// Create a new survey and insert it into the db
module.exports.CreateSurvey = (req, res) => {
 try{

    //create question objects
    let numberOfQuestion = req.body.numberOfQuestion;
    let Question = questionSchema;
    let Answer = answerSchema;
    let questionArray = new Array();

    //create questions accorder to the numberOfQuestion
    for (var i = 0; i < numberOfQuestion; ++i)
    {
        let question = new Question({
            "questionTopic" : req.body.topic[i],
            "questionAns" : 
                [
                     { "answer" : req.body.questionAns[i][1] },
                     { "answer" : req.body.questionAns[i][2] },
                     { "answer" : req.body.questionAns[i][3] },
                ],
             "type" : 1
        })

        questionArray.push(question);
    }


    // get a reference to the id from the url
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
    let newSurvey = survey({
            "topic": req.body.topic,
            "user": id,
            "createDate" : new Data(),
            "expireDate" : req.body.date,
            "questions" : questionArray,
            /*
            [
                { "questionTopic" : req.body.topic1,
                  "questionAns" : 
                  [
                      { "answer" : req.body.questionAns11 },
                      { "answer" : req.body.questionAns12 },
                      { "answer" : req.body.questionAns13 }                               
                  ],
                  "type" : 1
                },
                {
                  "questionTopic" : req.body.topic1,
                  "questionAns" : 
                  [
                      { "answer" : req.body.questionAns21 },
                      { "answer" : req.body.questionAns22 },
                      { "answer" : req.body.questionAns23 }                               
                  ],
                  "type" : 1
                }
            ]
            */
    });
    

        survey.create(newSurvey, (err, survey) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/surveys');
        }
        });
    }
    catch(err)
    {
        console.log(err);
        res.redirect('/errors/404');
    }
}