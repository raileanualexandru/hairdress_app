const express = require('express');
const router = express.Router();

const Appointment = require('../models/appointmentform');

router.get('/adminarea', (req, res) => {
   let data = req.query.date
   const t = new Date();

   const today = t.getDate()+'/'+ (t.getMonth()+1) + '/'+t.getFullYear();
   
   if(data){
      
      
   Appointment.find({date:data},(error, docs) => {
      docs.sort((a, b) => (a.heure > b.heure) ? 1 : (a.heure === b.heure) ? ((a.size > b.size) ? 1 : -1) : -1 )

      res.render('adminarea.ejs', { rndv: docs, d: data });

    
      //console.log("rendez-vous : "+ docs)
   });
   

 
}else{
   

   Appointment.find({date : today},(error, docs) => {
      
      res.render('adminarea.ejs', { rndv: docs, d: today });

   });
}

});





module.exports = router;