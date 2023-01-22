const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.listen(3000);

// MIDDLEWARE

// CONNECT TO DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to database');
});