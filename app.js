/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://localhost/restful-api')

const cookieParser = require("cookie-parser");

const User = require('./models/userModel');
const Item = require('./models/itemModel');

const loginRouter = require('./routes/loginRouter')(User,Item);
const userRouter = require('./routes/userRouter')(User);
const signupRouter = require('./routes/signupRouter')(User);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', userRouter);
app.use('/api', signupRouter);
app.use('/api', loginRouter)

app.get('/' , (req, res)=>{
    res.send('Welcome to my site!')
});

app.listen(port , ()=>{
    console.log('listening in port ' + port);
});