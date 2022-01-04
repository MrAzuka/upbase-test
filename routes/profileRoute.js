const { Router } = require('express')
const router = Router()
const { getProfile, updateProfile, addProfilePic } = require('../controllers/profileController')
const { upload } = require('../utils/imageUpload')
const { authenticateUser} = require('../middleware/authentication')

// PUT routes

// @routes /profile-update/:id
// @desc   Update Profile
router.put('/profile-update/:id',authenticateUser, upload.single("MyFile"), updateProfile)



// GET routes

// @routes /profile/:id
// @desc   Get Profile
router.get('/profile/:id', getProfile)

