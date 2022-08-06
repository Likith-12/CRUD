const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');
const routes = require('./routes');

const dbURI = "mongodb+srv://user_1:rovjf22762iJiOye@cluster0.2wswo.mongodb.net/Tatva_project?retryWrites=true&w=majority";
//E2UXQXJYrSjGM0kI
//rovjf22762iJiOye
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedtopology: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', 'Outlines');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });
  
app.get('/',(req, res)=>{
  res.redirect('/recipes');
});

app.get('/about',(req, res)=>{
    res.render('about');
});

app.use('/recipes', routes);

app.use('/deleted', (req, res) => {
  res.render('delete');
})
  
app.use((req, res) => {
    res.render('error');
});