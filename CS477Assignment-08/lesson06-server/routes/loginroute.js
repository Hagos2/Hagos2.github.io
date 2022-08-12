const express = require('express');

const router = express.Router();

const loginroute = require ('../controllers/logincontroller');

router.post('/', loginroute.login)




module.exports = router