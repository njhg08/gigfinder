const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// GET GIGS DATA
router.get('/', async (req, res) => {
  try {
    const gigs = await Gig.findAll({ raw: true });
    res.render('gigs', {
      gigs,
    });
  } catch (error) {
    console.error(error);
  }
});

// POST NEW GIG

module.exports = router;
