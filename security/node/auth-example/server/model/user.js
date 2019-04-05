const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model schema

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// Create model class

const UserClass = mongoose.model('user', userSchema);

// Export model
module.exports = UserClass;