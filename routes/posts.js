var express = require('express');
var router = express.Router();
const Post = require("../models/postsModel");

router.get('/', async function(req, res) {
  const data = await Post.find({});
  res.json(data);
});

router.post('/', function(req, res) {
  const { title } = req.body
  Post.create({
    title
  });
  res.json(req.body)
});

router.delete('/', function(req, res) {
  Post.deleteMany({}, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.delete('/:id', function(req, res) {
  const { id } = req.params;
  Post.deleteOne({_id: id}, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.patch('/:id', function(req, res) {
  const { id } = req.params;
  const { title } = req.body;
  Post.findByIdAndUpdate(id, { title }, function(err, data) {
    if (err) {
      res.json(err);
    }else {
      res.json(data);
    }
  });

});

module.exports = router;