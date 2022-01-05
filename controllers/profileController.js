
const User = require('../models/User')

exports.getProfile = async (req, res) => {
    try {
        const getProfile = await User.findOne({ email: req.user.email })
        res.status(200).json({ profile: getProfile })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}

exports.updateProfile = async (req, res) => {
    const { firstName, lastName, profile_pic} = req.body
    try {
        const updateUser = await User.findOneAndUpdate( {email: req.user.email}, {
            firstName: firstName,
            lastName: lastName,
            profile_pic: profile_pic
        })
        res.status(200).json({ message: "Succesfully Updated" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}


