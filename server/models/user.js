const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const user = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    avatar: {
        publicId: String ,
        url: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }],
}, {
    timestamps: true
})

user.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
}) 

user.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model("User", user)