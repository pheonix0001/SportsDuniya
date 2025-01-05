// models/Payout.js
const mongoose = require('mongoose');

const PayoutSchema = new mongoose.Schema({
  rate: { type: Number, required: true }
});

module.exports = mongoose.model('Payout', PayoutSchema);
