/*
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.ejs');
   
})

module.exports = router;

*/

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

//login page
router.get('/', (req, res) => {
    res.render('index');
})


router.get('/index', (req, res) => {
    res.render('index', {
        user: req.user, 
    })
})

//register page
router.get('/register', (req, res) => {
    res.render('register', {
        user: req.user
    })
})

//register page
router.get('/login', (req, res) => {
    res.render('login', {
        user: req.user
    })
})

router.get('/admin', (req, res) => {
    res.render('admin', {
        user: req.user
    })
})

router.get('/appointmentform', (req, res) => {
    res.render('appointmentform', {
        user : req.user
    })
})

router.post('/index', (req, res) => {
    const output =
        ` <p>You have a new contact request </p>
    <h3>Contact Details</h3>
      <ul>
        <li>Fullname : ${req.body.fullname} </li>
        <li>Email : ${req.body.email} </li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 535,
        secure : false,
        auth: {
            user: 'firouzfar.sebastien@gmail.com',
            pass: ''
        }
    });

    const mailOptions = {
        from: req.body.fullname, // sender address
        to: 'firouzfar.sebastien@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: output // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
        res.render('index', { user: req.user, title:'Hello'})
    })
})

module.exports = router;