const mongoose = require('mongoose'); // import module mongoose

const matchSchema= mongoose.Schema({
    teamOne:String,
    teamTwo:String,
    scoreOne:String,
    scoreTwo:String,
})

const match = mongoose.model('Match',matchSchema )

module.exports=match

