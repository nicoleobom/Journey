const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const session = require('express-session');
const routes = require("./routes");
// const userRoutes = express.Router();

const PORT = process.env.PORT || 4000;

app.use(routes);

// let User = require('./models/user');

app.use(cors());
// app.use(bodyParser.json());

// session
app.use(session({ secret: 'adventure', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log('req.session', req.session);
	return next();
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/journey", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Local MongoDB Database`));

// mongoose.connect('mongodb://localhost/journey', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log('MongoDB database connection establish successfully.');
// })
app.use(express.static("client/build"));

app.listen(PORT, function() {
    console.log('Server is running on port: ' + PORT);
});