import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUserSchema,
  registerUserSchema,
  resetPasswordSchema,
  sendResetEmailSchema,
} from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  resetPasswordController,
  sendResetEmailController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);
router.post('/login', validateBody(loginUserSchema), loginUserController);
router.post('/refresh', refreshUserSessionController);
router.post('/logout', logoutUserController);
router.post(
  '/send-reset-email',
  validateBody(sendResetEmailSchema),
  sendResetEmailController,
);
router.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  resetPasswordController,
);

export default router;
