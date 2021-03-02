import express from 'express';
const router = express.Router();

import * as userCtrl from '../controllers/user.controller.js';

router.post('/singup', userCtrl.createNewUser);

export default router;