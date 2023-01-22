const express = require('express');

const app = express();
app.listen(3000);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home page');
});