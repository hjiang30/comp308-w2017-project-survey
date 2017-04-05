let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let answerSchema = mongoose.Schema ({ answer : String });


//Ready to go
module.exports = mongoose.model('answer', answerSchema);