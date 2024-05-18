const express = require('express');

const router = express.Router();
const  customerController = require('../controllers/customerController')


// Get customer details --> Customer router
router.get('/',customerController.homepage)




module.exports = router;

