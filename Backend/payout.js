// routes/payout.js
const express = require('express');
const router = express.Router();
const Payout = require('../models/Payout');

// Set payout rate
router.post('/set-rate', async (req, res) => {
  try {
    const { rate } = req.body;
    const newPayout = new Payout({ rate });
    await newPayout.save();
    res.status(201).json({ message: 'Payout rate set successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to set payout rate' });
  }
});

// Get payouts
router.get('/', async (req, res) => {
  try {
    const payouts = await Payout.find();
    res.status(200).json(payouts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch payouts' });
  }
});

module.exports = router;
