const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/dbconn')
//const cors = require('cors')
const corsOptions = require('./config/config')
const cookieParser = require('cookie-parser')
const verifyJWT = require('./middleware/verifyJWT')
const PORT = process.env.PORT || 3000
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
//connectDB()
app.use(logger)
//app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/tools', express.static(path.join(__dirname, 'public')))
app.use('/register', require('./routes/register'))

app.use('/', require('./routes/root'))
app.use('/tools', require('./routes/tools'))
app.use('/auth', require('./routes/auth'))

app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))

app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'));

app.all('*', (req, res) => {
  if (req.accepts('html')) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404', '404.html'))
  }
  else if (req.accepts('json')) {
    res.json({ error: '404 Not found' })
  } else {
    res.type('txt').send('404 not found')
  }
})

app.use(errorHandler)
//mongoose.connection.once('open', () => {
  //console.log('Connected to Mongoose')
  app.listen(PORT, () => {
    console.log(`the server is ruuning on port ${PORT}`)
  })
//})
