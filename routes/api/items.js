const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require("../../config/keys");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Item = require('../../models/Item');
const validateItemInput = require('../../validation/item_submit');


// { game_id: req.params.game_id }

router.get("/test", (req, res) => res.json({ msg: "This is the items route" }));


router.get('/', (req, res) => {
    Item.find()
        .sort({ name: 1 })
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ items: 'No items found' }));
});


router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err =>
            res.status(404).json({ item: 'Item not found' })
        );
});

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateItemInput(req.body);
    
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newItem = new Item({
            name: req.body.name,
            game_id: req.body.game_id,
            description: req.body.description,
            pictures: req.body.pictures
        });

        newItem.save().then(item => res.json(item));
    }
);

module.exports = router;