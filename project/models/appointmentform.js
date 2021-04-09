const mongoose = require('mongoose');

//Appointment Schema
const AppointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    heure: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    }

    });

    const Appointment = mongoose.model('Appointment', AppointmentSchema);

    module.exports = Appointment;