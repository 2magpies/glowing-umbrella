const mongoose = require('../connections');

const QuestionSchema = new mongoose.Schema({
  title: String,
  question: String,
  answer: String
});

module.exports = Question;
