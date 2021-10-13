const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mainRouter = require('./router/router');
const PORT = process.env.PORT || 3000;
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');

require('dotenv').config({path: "../.env"});

app.use(express.static(buildPath));
app.listen(PORT);
app.use(express.json());

mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connection was successful');
    })
    .catch((e) => {
        console.log(e);
        console.log('Error while connecting to db');
    })

app.use(['/'], mainRouter);