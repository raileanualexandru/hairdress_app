const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const config = require('./config/dababase');
const bodyParser = require('body-parser');

//conect to db
mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongoDB');
});

const app = express();

//define paths for Express config
const publicDirectoryPath = path.join(__dirname ,'./public');

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Setup Public directory
app.use(express.static(publicDirectoryPath));

//Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/adminarea'));
//rout experiment
const r = require('./routes/calendar')
app.use('/calendar', r.router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));