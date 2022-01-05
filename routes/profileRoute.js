const { Router } = require('express')
const router = Router()
const { getProfile, updateProfile, addProfilePic, createProfilePic } = require('../controllers/profileController')
const { upload } = require('../utils/imageUpload')
const { authenticateUser} = require('../middleware/authentication')
const { homePage } = require('../controllers/authcontroller')

// PUT routes

// @routes /profile-update/:email
// @desc   Update Profile
router.put('/profile-update/:id',authenticateUser, upload.single("profile-pic"), updateProfile)


// GET routes

// @routes /profile/:id
// @desc   Get Profile
router.get('/profile/:id', authenticateUser,getProfile)



// @routes /
// @desc   Home Page
router.get('/', homePage)

module.exports = router