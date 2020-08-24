const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();

const PORT = 4000;

let User = require('./models/user');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/journey', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB database connection establish successfully.');
})

// user routes
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if(err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        if(err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully!'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed.');
        });
});

userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(!user)
            res.status(404).send('data is not found.');
        else
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.username = req.body.username;
            user.password = req.body.username;
            user.trips = req.body.trips;

            user.save().then(todo => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send('Update not possible.');
            });
    });
});

// trip routes - tbd

app.use('/users', userRoutes);

app.listen(PORT, function() {
    console.log('Server is running on port: ' + PORT);
});