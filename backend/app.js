
const express = require('express') // import express js 
const bodyParser = require('body-parser')  // import module body-parser
const mongoose = require('mongoose'); // import module mongoose
const bcrypt = require('bcrypt'); // import module bcrypt
const jwt = require('jsonwebtoken');
const session = require('express-session');
const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer');

const secretKey = 'your-secret-key';


mongoose.connect('mongodb://127.0.0.1:27017/Mean_DB')
    .then(() => console.log('Connected!'));


const User = require('./models/user')  // import Model User
const Match = require('./models/match')  // import Model Match
const Team = require('./models/team')  // import Model Team
const Player = require('./models/player')  // import Model Player


const app = express() // creation d'app express

app.use('/images', express.static(path.join('backend/images')))


const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}


const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

app.use(session({
    secret: secretKey,
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


// here Trait logi add Match
app.post('/matches', (req, res) => {
    const data = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
    })
    data.save().then(() => {
        res.json({
            message: "match added"
        })
    })
})


// here Trait logi get all Matches
app.get('/matches', (req, res) => {
    Match.find().then((docs) => {
        res.status(200).json({
            matches: docs
        })
    })

})

// here Trait logi delete match
app.delete('/matches/:id', (req, res) => {
    Match.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200).json({
            message: "match deleted"
        })
    })

})

// here Trait logi get match by id
app.get('/matches/:id', (req, res) => {
    Match.findOne({ _id: req.params.id }).then((findedObject) => {
        if (findedObject) {
            res.status(200).json({
                match: findedObject
            })

        }
    })

})

// here Trait logi update match by id
app.put("/matches", (req, res) => {
    console.log("req ", req.body);
    Match.updateOne({ _id: req.body._id }, req.body).then(() => {
        res.status(200).json({
            message: "match updated"
        })
    })
})


// here Trait logi  signup
app.post('/users', (req, res) => {

    bcrypt.hash(req.body.password, 8, function (err, hash) {

        if (err) {
            console.log(err);

        } else {
            const data = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
                role: req.body.role,
            })
            data.save((err, docs) => {

                console.log("docs", docs);

                if (err) {
                    console.log(err);
                    res.status(200).json({
                        message: "email existe"
                    })

                } else {
                    const transporter = nodemailer.createTransport({
                        host: "ssl0.ovh.net",
                        port: 587,
                       
                        auth: {
                            user: '***********',
                            pass: '**********'
                        }
                    });
                    const mailOptions = {
                        from: 'energy.sw@orbitsolutions.tn',
                        to: req.body.email,
                        subject: 'Invoices due',
                        text: 'Dudes, we really need your money.',
                        html: '<b>This is a test email sent using <i>Nodemailer</i>.</b>'
                    };

                    transporter.sendMail(mailOptions, function(error,
                        info){
                        if (error) {
                        console.log(error);
                        } else {
                        console.log('Email sent: ' + info.response);
                        }
                        });

                    res.status(200).json({
                        message: "user added"
                    })
                }
            })
        }


    });


})

// here BUs logi Login
app.post('/users/login', async (req, res) => {
    User.findOne({ email: req.body.email }).then(async (findedUser) => {
        if (!findedUser) {
            res.status(200).json({
                message: '0'
            })
        }
        let trusted = await bcrypt.compare(req.body.pwd, findedUser.password)
        if (!trusted) {
            res.status(200).json({
                message: '1'
            })
        } else {
            // let finalUser={
            //     firstName:findedUser.firstName,
            //     role:findedUser.firstName
            // }
            const token = jwt.sign({ user: findedUser }, secretKey, { expiresIn: '1h' });

            console.log(token);

            res.status(200).json({
                user: token,
                message: '2'
            })
        }
    })
})


// here Trait logi add Team
app.post('/teams', (req, res) => {
    const data = new Team({
        teamName: req.body.teamName,
        teamCountry: req.body.teamCountry,

    })
    data.save().then(() => {
        res.json({
            message: "team added"
        })
    })
})

// here Trait logi get all Teams
app.get('/teams', (req, res) => {
    Team.find().then((docs) => {
        res.status(200).json({
            teams: docs
        })
    })

})


// here Trait logi add Player
app.post('/players', multer({ storage: storage }).single('image'), (req, res) => {

    console.log('‘file’', req.file);
    let url = req.protocol + '://' + req.get('host');
    let img = url + '/images/' + req.file.filename
    const data = new Player({
        playerName: req.body.playerName,
        playerNumber: req.body.playerNumber,
        playerPost: req.body.playerPost,
        teamId: req.body.teamId,
        image: img,

    })
    data.save().then(() => {
        res.json({
            message: "player added"
        })
    })
})

app.get('/players/:id', (req, res) => {
    Player.findOne({ _id: req.params.id }).then((findedObject) => {
        if (findedObject) {
            res.status(200).json({
                player: findedObject
            })

        }
    })

})

app.get('/players', (req, res) => {
    Player.find().populate('teamId').then((players) => {
        if (players) {
            res.status(200).json({
                players: players
            })

        }
    })

})







module.exports = app // make app exportable