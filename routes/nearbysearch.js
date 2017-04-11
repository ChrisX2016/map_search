/**
 * Created by minimini on 4/10/17.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('nearby_search');
});

module.exports = router;