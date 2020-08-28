const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const passport = require('./config/passport');
const session = require('express-session');
const routes = require("./routes");

const PORT = process.env.PORT || 4000;

let User = require('./models/user');

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/journey', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log('MongoDB database connection establish successfully.');
// })

mongoose.connect("mongodb://localhost/journey", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Local MongoDB Database`));

// session
app.use(session({ secret: 'adventure', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log('req.session', req.session);
	return next();
});

// // user routes
// userRoutes.route('/').get(function(req, res) {
//     User.find(function(err, users) {
//         if(err) {
//             console.log(err);
//         } else {
//             res.json(users);
//         }
//     });
// });

// userRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     User.findById(id, function(err, user) {
//         if(err) {
//             console.log(err);
//         } else {
//             res.json(user);
//         }
//     });
// });

// userRoutes.route('/add').post(function(req, res) {
//     let user = new User(req.body);
//     user.save()
//         .then(user => {
//             res.status(200).json({'user': 'user added successfully!'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new user failed.');
//         });
// });

// userRoutes.route('/update/:id').post(function(req, res) {
//     User.findById(req.params.id, function(err, user) {
//         if(!user)
//             res.status(404).send('data is not found.');
//         else
//             user.firstname = req.body.firstname;
//             user.lastname = req.body.lastname;
//             user.username = req.body.username;
//             user.password = req.body.username;
//             user.trips = req.body.trips;

//             user.save().then(todo => {
//                 res.json('User updated!');
//             })
//             .catch(err => {
//                 res.status(400).send('Update not possible.');
//             });
//     });
// });

// trip routes - tbd

app.use(routes);

// app.use('/users', userRoutes);

app.listen(PORT, function() {
    console.log('Server is running on port: ' + PORT);
});