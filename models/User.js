const { Schema, model } = require('mongoose')
const validator = require('validator')

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
        },
        email: {
            type: String,
            required: [true, 'Please provide your email'],
            unique: true,
            lowercase: true,
            trim: true,
            validate: [validator.isEmail, 'Please provide a valid email'],
        },
        password: {
            type: String,
            required: [true, 'Please provide a password']
        },
        profile_pic: {
            type: String
        }
    },
    { timestamps: true }
)

module.exports = model("User", userSchema)