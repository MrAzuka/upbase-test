const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { JWT_SECRET, JWT_EXPIRES } = process.env

exports.createAccount = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const salt = await bcrypt.genSalt(11)
        const hashedPassword = await bcrypt.hash(password, salt)

        const createUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        })
        const newUser = await createUser.save()
        const token = jwt.sign({
             email: email, firstName: firstName,
            lastName: lastName
        }, JWT_SECRET)
        res.status(200).json({ message: "User created", token })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}



exports.loginAccount = async (req, res) => {
    const { email, password } = req.body
    try {
        // Check if email exist
        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(400).json({ message: "Email doesn't exist" })
        }
        console.log(user)
        // Check if password is a match
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            res.status(400).json({ message: "Incorrect Password" })
        }

        const token = jwt.sign({ email: email }, JWT_SECRET, {
            expiresIn: '10h',
        })

        res.status(200).json({ message: "User loggedIn", token, userId: user._id })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}

exports.deleteAccount = async (req,res) => {
    const {__id} = req.user
    try{
        const deleteUser = await User.findByIdAndDelete(__id)
        res.status(200).json("User Deleted Succsessfully")
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}