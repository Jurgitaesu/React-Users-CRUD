const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');
const validateInput = require('../middleware/validateInput');

router.get('/show', controller.show);
router.get('/delete/:id', controller.delete);
router.get('/user/:id', controller.findUser);
router.post('/upload', validateInput, controller.upload);
router.post('/update', validateInput, controller.update);

module.exports = router;