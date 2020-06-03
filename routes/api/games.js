const express = require("express");
const router = express.Router();
const validateGameInput = require('../../validation/game_submit');
const passport = require('passport');
const Game = require('../../models/Game');
const mongoose = require('mongoose');
const upload = require("../../config/multer/config");
mongoose.set("useFindAndModify", false);

//GAMES INDEX ROUTE
router.get('/', (req, res) => {
    Game.find()
        .sort({ title: 1 })
        .then(games => res.json(games))
        .catch(err => res.status(404).json({ noGamesFound: 'No games found' }));
});



//GAME POST ROUTE
router.post('/', upload.single("picture"),
//
// passport.authenticate('jwt', { session: false }),
(req, res) => {
    const { errors, isValid } = validateGameInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newGame = new Game({
        title: req.body.title,
        description: req.body.description,
        // user_id: req.user.id,
        picture: req.file.location
    });

    newGame.save()
        .then(game => res.json(game));
});




//GAME GET BY TITLE ROUTE
router.get('/:id', (req, res) => {
    // let oldTitle = req.params.title
    // let newTitle = oldTitle.replace(/-/g, " ");

    Game.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err =>
        res.status(404).json({
            noGameFound: 'No game found with that title'
        })
    );
});

//Game update
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateGameInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, game) => {
      if (err) return res.status(500).json(err);
      return res.json(game);
    }
  );
});

//Game delete
router.delete("/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id, (err, game) => {
    if (err) return res.status(500).json(err);
    const response = {
      message: "Game successfully deleted",
      id: game._id,
    };
    return res.status(200).send(response);
  });
});

module.exports = router;