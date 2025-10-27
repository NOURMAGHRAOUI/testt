const mongoose = require('mongoose'); // import module mongoose

const PlayerSchema= mongoose.Schema({
    playerName:String,
    playerNumber:String,
    playerPost:String,
    image:String,
    teamId:{type:String , ref:'Team'},
})

const player = mongoose.model('Player',PlayerSchema )

module.exports=player

