const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv/config')


const Routes = require('./Router/routes')

// DB CONNECTION

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

let db = mongoose.connection

// db.on("error",console.error.bind(console,"database error"));
db.on('error', console.error.bind(console, "Database Not Connected"));
db.once('open', () => {
    console.log('Database Connected');
});


// BodyParser

app.use(bodyParser.urlencoded({ extended: false}));

// Morgan 
app.use(morgan('tiny'));


// Port

app.use('/api', Routes)

// Listen

app.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));