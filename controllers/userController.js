const db = require("../models");

module.exports = {
	// find all users by score, sort by ascending
	findAll: (req, res) => {
		db.User
			.find(req.query) // find all
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
		console.log('hit');
		db.User
			.create(req.body)
			.then(data => res.redirect(307, "/api/user/login"))
			// .then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},

	updateScore: (req, res) => {
		db.User
			.updateOne({ _id: req.body.id }, { $push: { scores: req.body.score } }, { upsert: true })
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},

	login: async (req, res) => {
		if (req.user) res.json(res.user);
		res.send(null);
	}
}
