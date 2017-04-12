const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', (req, res, next) => {
  db('snacks')
  .then(snacks => {
    res.render('snacks/index', {snacks})
  })
});

router.get('/new', (req,res,next) => {
  res.render('snacks/new', {title: 'Add to the Snack Tray'}
  );
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('snacks')
  .where({id})
  .first()
  .then(snack => {
    res.render('snacks/show', {snack})
  })
})

router.post('/', (req,res,next) => {
  let snack = {
    name : req.body.name,
    image_url : req.body.image_url,
    review_description : req.body.review_description,
    rating : req.body.rating
  }
  db('snacks')
  .insert(snack, '*')
  .then(newSnack => {
    let id = newSnack[0].id
    res.redirect(`/snacks/${id}`)
  })
})

router.delete('/:id', (req,res, next) => {
  let id = req.params.id
  db('snacks')
  .del()
  .where({id})
  .then(() => {
    res.redirect('/snacks')
  })
})

module.exports = router;
