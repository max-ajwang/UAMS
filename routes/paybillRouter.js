import { Router } from 'express';
const router = Router();

import {
  getAllPaybills,
  getPaybill,
  createPaybill,
  updatePaybill,
  deletePaybill,
  showStats,
} from '../controllers/paybillController.js';
import {
  validatePaybillInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router
  .route('/')
  .get(getAllPaybills)
  .post(checkForTestUser, validatePaybillInput, createPaybill);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getPaybill)
  .patch(checkForTestUser, validatePaybillInput, validateIdParam, updatePaybill)
  .delete(checkForTestUser, validateIdParam, deletePaybill);

export default router;
