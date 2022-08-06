const Recipe = require('./models/recipe')
const mongoose = require('mongoose');

const recipe_index = (req, res) => {
    Recipe.find().sort({ createdAt: -1 })  
      .then((result) => {
        res.render('index', { recipe: result, title: 'Our Recipes' });
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const recipe_details = (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
      .then(result => {
        res.render('details', {recipe : result});
      })
      .catch(err => {
        console.log(err);
        res.render('error');
      });
  }

  const recipe_createpage_get = (req, res) => {
    res.render('create');
  }

  const recipe_create_post = (req, res) => {
    const recipe = new Recipe(req.body);
    recipe.save()
      .then(result => {
        res.redirect('/recipes');
      })
      .catch(err => {
        console.log(err);
      });
  }

  const recipe_delete = (req, res) => {
    const id = req.params.id;
    Recipe.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/deleted' });
      })
      .catch(err => {
        console.log(err);
      });
  }

  module.exports = {
    recipe_index, 
    recipe_details, 
    recipe_createpage_get, 
    recipe_create_post, 
    recipe_delete,
  }
  