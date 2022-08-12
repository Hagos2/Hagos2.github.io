const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    email: String,
    roll: String,
}, {
    versionKey: false
});

module.exports = mongoose.model('users', userSchema);