<<<<<<< HEAD
let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
  collection: "games"
});

module.exports = mongoose.model('games', gamesSchema);
=======
let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
  collection: "games"
});

module.exports = mongoose.model('games', gamesSchema);
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
