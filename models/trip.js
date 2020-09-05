const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tripSchema = new Schema ({
    startpoint: { type: String, required: true },
    endpoint: { type: String, required: true },
    budget: { type: Number },
    people: { type: Number, default: 1 },
    vehicle: { type: String },
    dates: { type: Date },
    stops: { type: Array },
    night: { type: String }
})

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;