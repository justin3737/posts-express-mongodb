var express = require('express');
var router = express.Router();
const Todos = require("../models/todosModel");

router.get('/', async function(req, res) {
  const data = await Todos.find({});
  res.json(data);
});

router.post('/', function(req, res) {
  const { title } = req.body
  Todos.create({
    title
  });
  res.json(req.body)
});

router.delete('/', function(req, res) {
  Todos.deleteMany({}, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.delete('/:id', function(req, res) {
  const {id} = req.params;
  Todos.deleteOne({_id: id}, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;