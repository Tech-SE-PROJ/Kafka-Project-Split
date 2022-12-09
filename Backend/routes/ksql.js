var express = require('express');
const ksqlQuery = require('../public/javascripts/ksqlQuery');
var router = express.Router();

/* get data from ksql call */
router.get('/', async(req, res) => {
  const text = req.query.table
  const response = await ksqlQuery(text);
  res.set('Access-Control-Allow-Origin', '*');
  res.send(response);
});

module.exports = router;