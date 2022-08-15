const express = require('express');
const rescue = require('express-rescue');
const uploadFile = require('../../middlewares/uploadFile');

const router = express.Router({ mergeParams: true });
const app = express();

app.use(express.static(`${__dirname}/uploads`));

router.post('/', uploadFile, rescue(require('./create')));

router.get('/', rescue(require('./list')));

module.exports = router;
