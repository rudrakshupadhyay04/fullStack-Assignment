import express from'express';
import { createCard, getAllCards } from '../controllers/card.controller.js';

const router = express.Router();

router.post('/cards', createCard);
router.get('/cards', getAllCards);

export default router;