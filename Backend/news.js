// routes/news.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
const NEWS_API_KEY = process.env.NEWS_API_KEY;
// Fetch news articles
router.get('/', async (req, res) => {
  try {
    const { type, startDate, endDate } = req.query;

    const response = await axios.get(`https://newsapi.org/v2/everything?q=${type}&from=${startDate}&to=${endDate}&apiKey=${NEWS_API_KEY}`);

    res.status(200).json(response.data.articles);
  } catch (err) {
    console.error('Error fetching news:', err.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;
