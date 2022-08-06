const express = require('express');
const Controller = require('./Controller');

const router = express.Router();

router.get('/', Controller.recipe_index);
router.get('/addrecipe', Controller.recipe_createpage_get);
router.post('/addrecipe', Controller.recipe_create_post);
router.get('/:id', Controller.recipe_details);
router.delete('/:id', Controller.recipe_delete);

module.exports = router; 