const express = require('express');
const articleController = require('../Controllers/article');

const router = express.Router();

router.post('/create', articleController.create);
router.get('/get', articleController.get);
router.get('/get/:id', articleController.getArticle)
router.post('/:id/like', articleController.likeArticle);
router.post('/:id/view', articleController.viewArticle);

module.exports = router;