const express = require("express");
const session = require('express-session');
const passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session
app.use(session({ secret: "study", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log("req.session", req.session);
	return next();
});

app.use(routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/journey", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Local MongoDB Database`));

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
