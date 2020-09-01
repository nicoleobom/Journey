const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let userSchema = new Schema ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    trips: {
        type: Schema.Types.ObjectId,
        ref: "Trip"
    }
});

// Define schema methods
userSchema.methods = {
	checkPassword: function (user, inputPassword) {
		return bcrypt.compareSync(inputPassword, user.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    console.log('presave')
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema);

module.exports = User;