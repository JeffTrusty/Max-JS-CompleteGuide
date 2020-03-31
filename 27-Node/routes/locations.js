const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: []
};

router.post('/add-location', (req, res, next) => {
  locationStorage.locations.push({
    id: Math.random(),
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng }
  });
  
});

router.get('/add-location', (req, res, next) => {});
