const express = require("express");
const router = express.Router();
const validateRecipeInput = require('../../validation/recipe_submit');
const passport = require('passport');
const Recipe = require('../../models/Recipe');
const mongoose = require('mongoose');
const upload = require("../../config/multer/config");
mongoose.set("useFindAndModify", false);


//COME BACK AND NEST ROUTES, SORT BY PARENT GAME? =-DAN 5/14

//RECIPE INDEX 
router.get('/', (req, res) => {
    Recipe.find()
        .sort({ label: 1 })
        .then(recipes => res.json(recipes))
        .catch(err => res.status(404).json({ noRecipesFound: 'No recipes found' }));
});

//RECIPE POST
router.post('/', upload.single("picture"), passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateRecipeInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newRecipe = new Recipe({
        label: req.body.label,
        ingredients: req.body.ingredients

    });

    newRecipe.save()
        .then(recipe => res.json(recipe));

});

//RECIPE GET BY ID
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err =>
            res.status(404).json({
                noRecipeFound: 'No recipe found with that id'
            })
        );
});

//Recipe update
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateRecipeInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, recipe) => {
      if (err) return res.status(500).json(err);
      return res.json(recipe);
    }
  );
});

//Recipe delete
router.delete("/:id", (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
    useFindAndModify;
    if (err) return res.status(500).json(err);
    const response = {
      message: "Recipe successfully deleted",
      id: recipe._id,
    };
    return res.status(200).send(response);
  });
});

module.exports = router;