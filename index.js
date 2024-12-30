const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userSchema.js');
const app = express();
const {mongoClient}
require('dotenv').config();

const port = process.env.PORT || 5555;
mongoose.connect(process.env.MONGODB_URL);

app.listen(port, () => console.log(`This app is running live on port ${port}`))

app.get('/', (req, res) => {
    res.send("hello mf");
});

