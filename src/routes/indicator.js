const router = require('express').Router();
const { indicators } = require('../controllers/indicator');

router.get('/', indicators);

module.exports = router;
