const mongoose = require('../connections');

const QuestionSchema = new mongoose.Schema({
  title: String,
  question: String
  user: String,
});

module.exports = Question;
