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
                title:'Surveys List',
                surveys: surveys,
                displayName:req.user ? req.user.displayName : ''
            })
        }
    });
}

// Display create survey ejs page
module.exports.DisplayAdd = (req,res) => {
    

    res.render('surveys/create', {
    title: "Add a new Survey",
    surveys: '',
    games:'',
    displayName: req.user.displayName,
    userid :req.user._id
  });
}

// Create a new survey and insert it into the db
module.exports.CreateSurvey = (req, res) => {
 try{

    //create question objects
    let numberOfQuestion = req.body.numberOfQuestion;
    console.log(numberOfQuestion);
    console.log(req.body['questionAns11']);
    console.log(req.body['questionAns' + 1 + '2']);
    console.log(req.body['questionAns' + 1 + '3']);
    //let Question = questionSchema;
    //let Answer = answerSchema;
    let questionArray = [];
    
    //create questions accorder to the numberOfQuestion
    for (var i = 1; i <= numberOfQuestion; ++i)
    {
        
        let question =  {
            "questionTopic" : req.body['questionTopic' + i],
            "questionAns" : 
                [   
                     { "answer" : req.body['questionAns' + i + '1'] },
                     { "answer" : req.body['questionAns' + i + '2'] },
                     { "answer" : req.body['questionAns' + i + '3'] }
                ],
             "type" : 1
        }
        
        questionArray.push(question);
    }

    console.log(questionArray);
    //console.log(req.body.userid);
    console.log(questionArray[0].questionAns);


    // get a reference to the id from the url
    //let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
    let newSurvey = survey({
            "topic": req.body.topic,
            "user": req.user._id,
            "createDate" : new Date(),
            "expireDate" : new Date(),//req.body.date,
            "questions" : questionArray,       
            /*[
                { "questionTopic" : req.body.questionTopic1,
                  "questionAns" : 
                  [
                      { "answer" : req.body.questionAns11 },
                      { "answer" : req.body.questionAns12 },
                      { "answer" : req.body.questionAns13 }                               
                  ],
                  "type" : 1
                },
                {
                  "questionTopic" : req.body.questionTopic2,
                  "questionAns" : 
                  [
                      { "answer" : req.body.questionAns21 },
                      { "answer" : req.body.questionAns22 },
                      { "answer" : req.body.questionAns23 }                               
                  ],
                  "type" : 1
                }
            ]*/
            
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