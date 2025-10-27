const mongoose = require('mongoose'); // import module mongoose

const teamSchema= mongoose.Schema({
    teamName:String,
    teamCountry:String,
   
   
})

const team = mongoose.model('Team',teamSchema )

module.exports=team

