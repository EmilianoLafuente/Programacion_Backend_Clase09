const express= require ('express')
const router = require('./router')
const mongoose = require('mongoose')
const morgan = require('morgan')
const {db} = require('./config/index')
const {userDb,passDb} = db

const app = express()

app.use(express.json())
app.use(morgan('dev')) //consola de desarrollo

router(app)

mongoose.connect(`mongodb+srv://${userDb}:${passDb}@cluster0.dyg6rbn.mongodb.net/?retryWrites=true&w=majority`);

mongoose.connection.once('open', () => {
    console.log('Successfully connected to DB');
  });

mongoose.connection.on('error', error => {
    console.error('Error connecting to DB', error);
  });


module.exports = app