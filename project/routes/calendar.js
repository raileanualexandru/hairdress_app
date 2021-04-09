const express = require('express');
const router = express.Router();

//const { param } = require('./appointmentform');

//Appointment Model
const Appointment = require('../models/appointmentform');

router.get('/', (req, res) => {
    let data = req.query.date;
    const interval1 = ['09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00', '12:00 - 12:30', '12:30 - 13:00'];
    const interval2 = ['13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00'];
    let busyInterval = []
    Appointment.find({date:data},(error, docs) => {

        for (i in docs){
            busyInterval.push(docs[i].heure);
        }

    res.render('calendar.ejs', {rndv: docs, int1:interval1,int2:interval2, busyint: busyInterval, date: data});

    
    });

});


router.post('/', (req, res) => {

    const { date, heure, name, email, tel } = req.body;

    const newAppointment = new Appointment({
        date,
        heure,
        name,
        email,
        tel
    });
    newAppointment.save();
    //req.flash('success_msg', 'You are now registered!');

    res.redirect('/')



});



module.exports = { router: router };