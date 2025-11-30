// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/thank-you', (req, res) => {
  res.render('thank-you');
});
// Add these inside routes/index.js
router.get('/stories', (req, res) => {
  res.render('stories');
});
router.get('/donate', (req, res) => {
  res.render('donate', {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  });
});

router.get('/refer', (req, res) => {
  res.render('refer');
});
router.get('/about', (req, res) => res.render('about'));
router.get('/volunteer', (req, res) => res.render('volunteer'));
router.get('/contact', (req, res) => res.render('contact'));

router.post('/contact', (req, res) => {
  console.log('Contact form:', req.body);
  res.redirect('/thank-you?type=contact');
});

router.post('/submit-referral', (req, res) => {
  // In real life: save to database + send email
  console.log('New referral:', req.body);
  res.redirect('/thank-you?type=referral');
});

module.exports = router;