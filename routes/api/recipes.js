const express = require("express");
const router = express.Router();
const validateRecipeInput = require('../../validation/recipe_submit');
const passport = require('passport');
const Recipe = require('../../models/Recipe');
const mongoose = require('mongoose');


//COME BACK AND NEST ROUTES, SORT BY PARENT GAME? =-DAN 5/14

//RECIPE INDEX 
router.get('/', (req, res) => {
    Recipe.find()
        .sort({ label: 1 })
        .then(recipes => res.json(receipes))
        .catch(err => res.status(404).json({ noRecipesFound: 'No recipes found'}));
});

//RECIPE POST
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateRecipeInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newRecipe = new Recipe({
        label: req.body.label
        
    });

    newRecipe.save()
        .then(recipe => res.json(recipe));

});

//RECIPE GET BY ID
router.get('/:id', (req, res) => {
    Recipe.findById( req.params.id )
    .then(recipe => res.json(recipe))
    .catch(err =>
        res.status(404).json({
            noRecipeFound: 'No recipe found with that id'
        })
    );
});

module.exports = router;