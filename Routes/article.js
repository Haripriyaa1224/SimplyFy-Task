const express = require('express');
const articleController = require('../Controllers/article');

const router = express.Router();

router.post('/create', articleController.create);
router.get('/get', articleController.get);

module.exports = router;