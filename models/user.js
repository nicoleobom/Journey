const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let User = new Schema ({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    trips: {
        type: Schema.Types.ObjectId,
        ref: "Trip"
    }
});

module.exports = mongoose.model('User', User);