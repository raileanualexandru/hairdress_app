const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('buttons.ejs');
   
})

module.exports = router;