import express from 'express';
const router = express.Router();

import * as loginCtrl from '../controllers/login.controller.js';

router.post('/signin', loginCtrl.loginUser);

export default router;