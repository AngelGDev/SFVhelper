const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const connectDB = require('./config/database')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const logger = require('morgan')
const methodOverride = require('method-override')

const homeRoutes = require('./routes/home')
const fighterRoutes = require('./routes/fighter')

require('dotenv').config({ path: './config/.env' })

connectDB()

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(methodOverride('_method'))

app.use(logger('dev'))

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
)

app.use(flash())

app.use('/', homeRoutes)
app.use('/fighters', fighterRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running lets go`)
})