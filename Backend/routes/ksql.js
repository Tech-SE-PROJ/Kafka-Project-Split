var express = require('express');
const ksqlQuery = require('../public/javascripts/ksqlQuery');
var router = express.Router();

/* get data from ksql call */
router.get('/', async function(req, res, next) {
  const response = await ksqlQuery();
  res.set('Access-Control-Allow-Origin', '*');
  res.send(response);
});

module.exports = router;