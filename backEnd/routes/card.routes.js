import express from'express';
import { createCard } from '../controllers/card.controller.js';

const router = express.Router();

router.post('/cards', createCard);

export default router;