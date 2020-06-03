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

router.patch("/:id", (req, res)=>{
    const { errors, isValid } = validateItemInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    Item.findByIdAndUpdate(
      // the id of the item to find
      req.params.id,

      // the change to be made. Mongoose will smartly combine your existing
      // document with this change, which allows for partial updates too
      req.body,

      // an option that asks mongoose to return the updated version
      // of the document instead of the pre-updated one.
      { new: true },

      // the callback function
      (err, item) => {
        // Handle any possible database errors
        if (err) return res.status(500).json(err);
        return res.json(item);
      }
    );

});


router.delete("/:id", (req, res)=>{

    Item.findByIdAndRemove(req.params.id, (err, item) => {
      if (err) return res.status(500).json(err);
      const response = {
        message: "Item successfully deleted",
        id: item._id,
      };
      return res.status(200).send(response);
    });
});

 
router.post('/',
    upload.single("picture"),
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateItemInput(req.body);
    
        if (!isValid) {
            return res.status(400).json(errors);
        }

        
        const newItem = new Item({
            name: req.body.name,
            description: req.body.description,
            picture: req.file.location,
            // game_id: gameId
            game_id: req.body.game_id
        });

        newItem.save().then(item => res.json(item));
    }
);



module.exports = router;