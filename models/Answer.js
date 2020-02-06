const mongoose = require('./connections');

const AnswerSchema = new mongoose.Schema({
  question: [
    {
      ref: 'Question',
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  user: String,
  answer: String
});

module.exports = Answer;
