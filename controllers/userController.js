const db = require("../models");
const bcrypt = require('bcrypt');

module.exports = {
	// find all
	findAll: (req, res) => {
		db.User
			.find(req.query)
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	// find all by id
	findById: (req, res) => {
		db.User
			.findById(req.params.id)
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	// creating new users/posting to json
	create: (req, res) => {
		db.User
			.create(req.body)
			.then(data => res.redirect(307, "/api/user/login"))
			.catch(err => res.status(422).json(err));
	},

	updateTrips: (req, res) => {
		db.User
			.updateOne({ _id: req.body.id }, { $push: { trips: req.body.trips } }, { upsert: true })
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},

	updateUserName: (req, res) => {
		console.log(req.body);
		db.User
<<<<<<< HEAD
			.updateOne({ _id: req.body.id }, { upsert: true })
=======
			.updateOne({ _id: req.body.id }, { $set: { username: req.body.username } }, { upsert: true })
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},

	updateUserPassword: (req, res) => {
		console.log(req.body);
		const newPassword = req.body.password
		hashedPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10), null);
		
		db.User
			.updateOne({ _id: req.body.id }, { $set: { password: hashedPassword } }, { upsert: true })
>>>>>>> 9fe68774c0f858e5566c8829f0f505bf03f62ec6
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},

	login: async (req, res) => {
		if (req.user) res.json(res.user);
		res.send(null);
	}
}
