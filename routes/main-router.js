const express = require('express')
const router = express.Router()


// * recherche sociétés
const getAllSocietes = require('../controllers/get-societes')
const getOne = require('../controllers/get-societes')
const topRating = require('../controllers/get-societes')

//* tous les avis
const allAvis = require('../controllers/avis')
const avisFaible = require('../controllers/avis')
const createReview = require('../controllers/avis')


router
    .post('/create-review', createReview.createReview)
    .get('/societes', getAllSocietes.getAllSocietes)
    .get('/societe/:id', getOne.getOne)
    .get('/top', topRating.topRating) // le top des societes noté 5 *
    // * avis
    .get('/allAvis', allAvis.allAvis)
    .get('/allFaible', avisFaible.avisFaible)


module.exports = router