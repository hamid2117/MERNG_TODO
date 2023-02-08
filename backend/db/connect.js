const mongoose = require('mongoose')
//Connect to database
const connectDB = (url) => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}

module.exports = connectDB
