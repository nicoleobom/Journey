const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const authenticate = require("../../config/authenticate");
const passport = require("passport");
const { User } = require("../../models");

router.post("/create", userController.create);

router.post("/login", passport.authenticate("local"), userController.login);

router.get("/authenticate", authenticate);

router.use(authenticate);

// router.get('/*', authenticate);

router.get('/', userController.findAll);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

router.get('/data', (req, res) => {
    res.json(req.session.passport.user);
})

router.get('/:id', userController.findById);

router.put('/addTrip', userController.updateTrips);

router.put('/', userController.updateUser);

router.route('/update/:id').post(function(req, res) {
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

module.exports = router;
