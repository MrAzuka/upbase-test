
const User = require('../models/User')

exports.getProfile = async (req, res) => {
    const { __id } = req.user
    try {
        const getProfile = await User.findById({ __id })
        res.status(200).json({ profile: getProfile })
    } catch (err) {
        console.log(err)
        res.status(500).json({ Error: err })
    }
}

exports.updateProfile = async (req, res) => {
    const {__id, firstName, lastName, profile_pic} = req.user
    try {
        const updateUser = await User.findByIdAndUpdate( __id , {
            firstName: firstName,
            lastName: lastName,
            profile_pic: req.file.filename
        })
        res.status(200).json({ message: "Succesfully Updated", "User": updateUser })
    } catch (err) {

    }
}


