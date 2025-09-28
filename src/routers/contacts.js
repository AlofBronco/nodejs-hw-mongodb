import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  updateContactController,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', getContactsController);
router.get('/:contactId', isValidId, getContactByIdController);
router.post('/', validateBody(createContactSchema), createContactController);
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  updateContactController,
);
router.delete('/:contactId', isValidId, deleteContactController);

export default router;
