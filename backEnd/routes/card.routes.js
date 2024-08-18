import express from'express';
import { createCard, getAllCards, getParticularCard } from '../controllers/card.controller.js';

const router = express.Router();

router.post('/cards', createCard);
router.get('/cards', getAllCards);
router.get('/cards/:title', getParticularCard);

export default router;