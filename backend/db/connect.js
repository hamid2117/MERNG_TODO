const mongoose = require('mongoose')
//Connect to database
mongoose.set('strictQuery', false)
const connectDB = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
