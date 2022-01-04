const { Router } = require('express')
const router = Router()
const { createAccount, loginAccount, deleteAccount } = require('../controllers/authController')
const { authenticateUser} = require('../middleware/authentication')

// POST routes

// @routes /auth/signup
// @desc   Signup
router.post('/signup', createAccount)

// @routes /auth/login
// @desc   Login
router.post('/login', loginAccount)


// DELETE route

// @routes /auth/delete
// @desc   Delete User
router.post('/delete/:id',authenticateUser, deleteAccount)




module.exports = router