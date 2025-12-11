import express from 'express';
import { createInitialUser } from '../controllers/authController.js'
import { loginUser } from '../controllers/authController.js'
const router = express.Router();

router.post('/user', createInitialUser);
router.post('/login',loginUser);

export default router;