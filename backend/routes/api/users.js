const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

router.get('/:id', (req, res) => {
    let ObjectId = require("mongoose").Types.ObjectId;

    User.find({ _id: ObjectId(req.params.id) }).then(user => {
      res.json(user);
    });
})

// @route POST users/register
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res.status(400).json({ username: "Username already exists" });
        }
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
});

// @route POST users/login
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;
    // Find user by username
    User.findOne({ username }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ usernotfound: "User not found" });
        }
        // Check password
        if (password === user.password) {
            return res.json({ user, success: true });
        } else {
            return res.status(400).send({ passwordincorrect: "Password incorrect" });
        }
    });
});

module.exports = router;
