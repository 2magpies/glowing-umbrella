const mongoose = require('../db/connections');

const QuestionSchema = new mongoose.Schema({
  title: String,
  question: String,
  answer: String
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
