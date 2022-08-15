const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/games', require('./games/router'));

module.exports = root;