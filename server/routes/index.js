<<<<<<< HEAD
// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  indexController.DisplayContact(req, res);
});

module.exports = router;
=======
// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  indexController.DisplayContact(req, res);
});

module.exports = router;
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
