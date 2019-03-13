const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParse.json());

app.use('/admin',adminRoutes);

mongoose
    .connect('mongodb://localhost:27017/sportshop', {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('CONNECTED');
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
