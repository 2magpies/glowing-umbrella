// Require controller(s)
const questionsController = require('./controllers/questions');

const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.use(methodOverride('_method'));

app.use('/questions', questionsController);

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
