const express = require('express');

const router = express.Router();


const booksroute = require('../controllers/bookscontrollers');

router.get('/', booksroute.getAll);
router.get('/:id', booksroute.getByID);
router.post('/', booksroute.save);
router.put('/:id', booksroute.update);
router.delete('/:id', booksroute.deleteByID)



module.exports = router;