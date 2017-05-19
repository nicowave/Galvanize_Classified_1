
const express = require('express');
const router = express.Router();
const knex = require('../knex')





router.get('/', function(req, res) {
  knex('classifieds').then(function(messages) {
    res.send(messages);
    console.log(messages);
  }).catch(function(err) {
    res.send(err);
  });
});

router.get('/:id', function(req, res) {
  knex('classifieds')
    .where({id: req.params.id})
    .first()
    .then(function(item) {
      res.send(item);
    }).catch(function(err) {
      res.send(err);
    })
})

router.post('/', function(req, res) {
  knex('classifieds').insert(req.body, '*').then(function(item) {
    res.send(item);
  }).catch(function(err) {
    res.send(err);
  });
});

router.delete('/:id', function(req, res) {
  console.log(req.params.title)
  let deletedItemTitle = req.params.title
  knex('classifieds').where('id', req.params.id).first().del().then(function() {
    res.send(`${deletedItemTitle} item deleted!`);
  }).catch(function(err) {
    res.send(err);
  });
});

router.put('/:id', function(req, res) {
  knex('classifieds')
    .where('id', req.params.id)
    .update(req.body)
    .then(function() {
      res.send("Classified Message Updated!")
    }).catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
