/* eslint-disable*/

const express = require('express');
const bookControllers = require('../controllers/bookControllers');

//bookController.js
const router = express.Router();


router.get('/', bookControllers.getAll);
router.get('/:id', bookControllers.getById);
router.post('/', bookControllers.save);
router.put('/:id', bookControllers.update2);
router.delete('/:id', bookControllers.deleteById);


module.exports = router;