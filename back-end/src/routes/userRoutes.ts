import { Router } from 'express';
import { createAdminUser, createUser, getUser, getallUsers, loginUser } from '../conrollers/userController';

const router = Router();

router.get('/', getallUsers);
router.get('/:id', getUser);
// router.post('/verify', verify)
router.post('/create-user', createUser);
router.post('/create-admin', createAdminUser);
router.post('/signin', loginUser);


export default router;