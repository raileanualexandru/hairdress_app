const mongoose = require('mongoose');

//Appointment Schema
const DateAppSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    }

    });

    const DateApp = mongoose.model('DateApp', DateAppSchema);

    module.exports = DateApp;