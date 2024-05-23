const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController');

// Route pour soumettre une réponse
router.post('/submit', responseController.submitResponse);

module.exports = router;