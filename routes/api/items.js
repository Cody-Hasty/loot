const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require("../../config/keys");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Item = require('../../models/Item');
const validateItemInput = require('../../validation/item_submit');
// const awsController = require("../../controller/aws.controller");
const upload = require("../../config/multer/config");
mongoose.set("useFindAndModify", false);

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
    upload.single("picture"),
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateItemInput(req.body);
    
        if (!isValid) {
            return res.status(400).json(errors);
        }

        let image;
        if (req.file) {
            image = req.file.location;
        }
        
        const newItem = new Item({
            name: req.body.name,
            description: req.body.description,
            picture: image,
            // game_id: gameId
            game_id: req.body.game_id
        });

        newItem.save().then(item => res.json(item));
    }
);

//Item update
router.patch("/:id", (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Item.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, item) => {
            if (err) return res.status(500).json(err);
            return res.json(item);
        }
    );
});

//Item delete
router.delete("/:id", (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, item) => {
        if (err) return res.status(500).json(err);
        const response = {
            message: "Item successfully deleted",
            id: item._id,
        };
        return res.status(200).send(response);
    });
});



module.exports = router;