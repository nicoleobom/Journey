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

router.get('/forgot', userController.findbyEmail);

router.put('/addTrip', userController.updateTrips);

router.put('/settings/userName', userController.updateUserName);

router.put('/settings/userPassword', userController.updateUserPassword);

module.exports = router;
