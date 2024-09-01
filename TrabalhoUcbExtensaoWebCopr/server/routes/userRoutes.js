const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.get('/me', authMiddleware, userController.getUser);
router.put('/me', authMiddleware, userController.updateUser);

module.exports = router;
