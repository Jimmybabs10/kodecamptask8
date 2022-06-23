const express = require('express');
const router = express.Router();
const { register, distance, deleteLocation, editLocation, getAllLocation, specificLocation } = require('../controller/indexController');
const {getMyLocation} = require('../utilities/externalapi');

router.post('/register', register);
router.post('/distance/:id', distance)
router.delete('/:id', deleteLocation );
router.patch('/:id', editLocation);
router.get('/location', getAllLocation);
router.get('/:id', specificLocation);

router.post('/f', getMyLocation);

module.exports = router;

