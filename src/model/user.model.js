const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    role: String,
    name: String,
    isOnline:Boolean
})

module.exports = mongoose.model('chat',UserSchema)
