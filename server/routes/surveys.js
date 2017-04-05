// modules required for routing
let express = require('express');
let router = express.Router();


// require the users controller for authentication
let usersController = require('../controllers/users');

// require the survey controller 
let surveysController = require('../controllers/surveys');


// Get /initial - Display create survey initial page
router.get('/initial',usersController.RequireAuth,(req,res,next)=>{
  surveysController.DisplayInitialPage(req,res);
});

router.post('/initial',usersController.RequireAuth,(req,res,next) =>  {surveysController.GotoCreatePage(req,res)});

// get -- all surveys list 
router.get('/',(req,res,next)=>{
    surveysController.ReadSurveyList(req,res);
});

// get -- surveys list by user id


// get -- the create page to create new survey
router.get('/create', usersController.RequireAuth,(req,res,next)=>{
    surveysController.DisplayAdd(req,res);
});

router.post('/create',usersController.RequireAuth,(req,res,next)=>
{
    console.log("try to save");
    surveysController.CreateSurvey(req,res);
});

// post -- process to save the new survey to db

// get -- Display survey page by survey id


// post -- save survey respond to Db

// get -- process the delete survey by survey id

module.exports = router;