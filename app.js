const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        Message: 'it works!'
    });
});

module.exports = app;
 xc