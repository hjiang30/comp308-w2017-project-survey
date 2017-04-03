let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let answerSchema = new Schema ({ answer : String });


//Ready to go
module.exports = mongoose.model('answer', answerSchema);