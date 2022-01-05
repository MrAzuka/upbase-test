
const User = require('../models/User')

exports.getProfile = async (req, res) => {
    const { _id } = req.params
    
    try {
        const getProfile = await User.findById({ _id: _id })
        console.log(getProfile)
        res.status(200).json({ profile: getProfile })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}

exports.updateProfile = async (req, res) => {
    const { firstName, lastName, profile_pic} = req.body
    try {
        const updateUser = await User.findByIdAndUpdate( {_id: req.params._id}, {
            firstName: firstName,
            lastName: lastName,
            profile_pic: profile_pic
        })
        res.status(200).json({ message: "Succesfully Updated", "User": updateUser })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}


exports.createProfilePic = async (req, res) => {
    try {
        const user = await User.findById( {_id: req.params._id})
        const newProfilePic = await User.create({
            profile_pic: req.file.filename
        })
        await newProfilePic.save()

        res.status(201).json({ message: "Profile Picture Updated", "User": user })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}