import express from 'express';
const router = express.Router();

import * as profileCtrl from '../controllers/profile.controller.js';

router.get('/profile', profileCtrl.getProfile)
router.post('/profile', profileCtrl.createNewProfile);

export default router;