var express = require('express');
var router = express.Router();
var Pessoa = require("../controllers/pessoas");
const pessoa = require('../models/pessoas');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /compositores
router.get('/', function(req, res, next) {
  Pessoa.list(req, res)
    .then(pessoas => {
      res.render('pessoasListPage', { title: 'Pessoas', pessoas: pessoas });
    }).catch(err => {
      res.render('error', { error: err });
    });
});


// POST /compositores/add
router.post('/add', function(req, res, next) {
  Pessoa.insert(req.body).then(() => {
    res.redirect('/pessoas');
  }).catch(err => {
    res.render('error', { error: err});
  });
});




module.exports = router;
