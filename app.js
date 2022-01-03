const express = require('express')
const cors = require(cors)
require('dotenv').config()
const { PORT } = process.env
const { connectDB } = require('./DB/connectDB')

const app = express()


// connect DB
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.listen(PORT, () => { console.log(`Server is running on localhost:${PORT}`) })