var express = require('express');
var router = express.Router();
const PostController = require('../controllers/posts');

router.get('/', PostController.getPosts);

router.post('/', PostController.createPosts);

router.delete('/', PostController.deletePosts);

router.delete('/:id', PostController.deleteOnePosts);

router.patch('/:id', PostController.updatePosts);

module.exports = router;