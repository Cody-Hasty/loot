const express = require("express");
const router = express.Router();
const validateGameInput = require('../../validation/game_submit');
const passport = require('passport');
const Game = require('../../models/Game');
const mongoose = require('mongoose');

//GAMES INDEX ROUTE
router.get('/', (req, res) => {
    Game.find()
        .sort({ title: 1 })
        .then(games => res.json(games))
        .catch(err => res.status(404).json({ noGamesFound: 'No games found' }));
});



//GAME POST ROUTE
router.post('/', //
// passport.authenticate('jwt', { session: false }),
(req, res) => {
    const { errors, isValid } = validateGameInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newGame = new Game({
        title: req.body.title,
        description: req.body.description,
        user_id: req.user.id
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

module.exports = router;