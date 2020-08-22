const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Trip = new Schema ({
    startpoint: { type: String, required: true },
    endpoint: { type: String, required: true },
    budget: { type: Number },
    people: { type: Number, default: 1 },
    vehicle: { type: String },
    startdate: { type: Date },
    enddate: { type: Date },
    overnight: { type: String },
    stops: { type: Array },
    night: { type: String }
})

module.exports = mongoose.model('Trip', Trip);