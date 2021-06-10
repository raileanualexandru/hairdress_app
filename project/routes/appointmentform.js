const express = require('express');
const router = express.Router();

//data from router.post of calendar.js
const dateapp = require('./calendar')


//Appointment Model
const Appointment = require('../models/appointmentform');


router.get('/', (req, res) => {
    
    res.render('appointmentform.ejs');
 
});



//Appointment handle
router.post('/', (req, res) => {
    //console.log(req.body)
    
    const { date, name, email, tel } = req.body;
    
    const newAppointment = new Appointment({
        date,
        name,
        email,
        tel
    });
    
    newAppointment.save();
    //req.flash('success_msg', 'You are now registered!');

    res.redirect('/')
});





module.exports = router;