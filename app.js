/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/userAPI')
const userRouter = express.Router();
const port = process.env.PORT || 3000;

const User = require('./models/userModel');

userRouter.route('/books')
.get((req, res) => {
    const response = {hello: 'This is my API'};
    res.json(response);
});
app.use('/api', userRouter);

app.get('/' , (req, res)=>{
    res.send('Welcome to my site!')
});

app.listen(port , ()=>{
    console.log('listening in port ' + port);
});