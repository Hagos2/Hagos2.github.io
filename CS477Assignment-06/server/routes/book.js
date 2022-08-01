/* eslint-disable*/

const express = require('express');
const bookController = require('../controllers/bookController');

//bookController.js
const router = express.Router();


router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.save);
router.put('/:id', bookController.update2);
router.delete('/:id', bookController.deleteById);


module.exports = router;