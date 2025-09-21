import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  updateContactController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/', getContactsController);
router.get('/:contactId', getContactByIdController);
router.post('/', createContactController);
router.patch('/:contactId', updateContactController);
router.delete('/:contactId', deleteContactController);

export default router;
