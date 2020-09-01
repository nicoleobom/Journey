const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/journey"
);

console.log("DB Connection Successful!")

const userSeed = [
  {
    firstname: "Toni",
    lastname: "Davis",
    username: "tdj",
    password: "coolchick92",
  },
  {
    firstname: "Nicole",
    lastname: "Obomsawin",
    username: "nicoleobom",
    password: "dfjs8jc83jf",
  },
  {
    firstname: "Logan",
    lastname: "Hemphill",
    username: "hemphill",
    password: "just4now",
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + "  records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
