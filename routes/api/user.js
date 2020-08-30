const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const authenticate = require("../../config/authenticate");
const passport = require("passport");
const { User } = require("../../models");

// user routes
// userRoutes.route('/').get(function(req, res) {
//     User.find(function(err, users) {
//         if(err) {
//             console.log(err);
//         } else {
//             res.json(users);
//         }
//     });
// });

router.post("/login", passport.authenticate("local"), userController.login);

router.get("/authenticate", authenticate);

// router.use(authenticate);

// router.get('/*', authenticate);

router.get('/', userController.findAll);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

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

router.get('/:id', userController.findById);

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

router.post('/add', userController.create);

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

module.exports = router;
