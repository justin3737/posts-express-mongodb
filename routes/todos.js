var express = require('express');
var router = express.Router();
const Todos = require("../models/todosModel");

router.get('/', async function(req, res) {
  const data = await Todos.find({});
  console.log(data);
  res.json(data);
});

router.post('/', function(req, res) {
  const { title } = req.body
  Todos.create({
    title
  });
  res.json(req.body)
});

module.exports = router;