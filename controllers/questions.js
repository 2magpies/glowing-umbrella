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

router.get('/:id', (req, res) => {
  Question.findOne({ _id: req.params.id })
    .then(question => {
      res.render('show', question);
    })
    .catch(console.error);
});

router.post('/', (req, res) => {
  Question.create(req.body)
    .then(question => {
      res.redirect('/questions');
    })
    .catch(console.error);
});

router.put('/:id', (req, res) => {
  console.log(req);
  const question = {
    answer: req.body.answer
  };
  Question.findOneAndUpdate({ _id: req.params.id }, question, {
    new: true
  }).then(question => {
    console.log(question);
    res.redirect('/questions');
  });
});

router.delete('/:id', (req, res) => {
  Question.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect('/questions');
  });
});

module.exports = router;
