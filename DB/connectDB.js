const { connect } = require('mongoose')
require('dotenv').config()
const { MONGO_URI } = process.env

exports.connectDB = async () => {
    try {
        await connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Database is running on ${MONGO_URI}`)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}