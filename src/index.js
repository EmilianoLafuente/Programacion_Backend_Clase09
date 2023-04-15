const express= require ('express')
const router = require('./router')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

router(app)




mongoose.connect('mongodb+srv://admin:admin@cluster0.nbnuujb.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.once('open', () => {
    console.log('Successfully connected to DB');
  });

mongoose.connection.on('error', error => {
    console.error('Error connecting to DB', error);
  });


module.exports = app