const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

router.get('/', (req, res) => {
  Question.find({})
    .then(questions => {
      res.render('index', { questions });
    })
    .catch(console.error);
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/:id/answer', (req, res) => {
  Question.findById(req.params.id).then(question => {
    res.render('answer', question);
  });
});

module.exports = router;
