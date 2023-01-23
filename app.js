const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.listen(3000);

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// IMPORT ROUTES
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// CONNECT TO DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to database');
});