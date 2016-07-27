var express = require('express');
var router = express.Router();

router.get('/', require('./services/find'));

module.exports = router;