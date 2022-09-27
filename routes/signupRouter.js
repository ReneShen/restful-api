/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const path = require('path');

const bcrypt = require("bcrypt");
const saltRounds = 10;

function routes(User){
    const signupRouter = express.Router();

    // Hash the password when creating a new user
    signupRouter.route('/signup')
    .post((req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        // if there's duplicate, render email already exists
        const userDuplicate = User.find({email : email})
        if(userDuplicate){
            // res.send('Email already exists')
            return res.redirect('/login')
        }

        // hash the password and create a new user
        bcrypt.hash(password, saltRounds, (err, hash) => {
            Object.keys(req.body).forEach((key) => {
                if(key === "password") {
                    req.body.password = hash;
                }
            })
            const newUser = new User(req.body);
            newUser.save((err) => {
                if(err){
                    return res.send(err)
                }
                return res.json(newUser);
            });
        })
    }) 

    return signupRouter;
}

module.exports = routes;