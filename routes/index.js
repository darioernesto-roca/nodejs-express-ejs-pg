const express = require('express');
const router = express.Router();
const { getHome, getAbout, getBlog, getContact } = require('../controllers/pageController');

router.get('/', getHome);
router.get('/about', getAbout);
router.get('/blog', getBlog);
router.get('/contact', getContact);

module.exports = router;