require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
// routers
const mainRoute = require('./src/routes')
// connectDB
const connectDB = require('./db/connect')
// error handler
const notFoundMiddleware = require('./src/middleware/not-found');
const errorHandlerMiddleware = require('./src/middleware/error-handler');

app.use(express.json())

// routes
app.use('/', mainRoute)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000
const start = () => {
  try {
    // DB connect initiate
    connectDB.getConnection((err) => {
      if (err) throw err;
      console.log("Connected to DB")
    })
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()