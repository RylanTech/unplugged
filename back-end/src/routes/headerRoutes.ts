import { Router } from 'express';
import { editHeader, getHeader } from '../conrollers/headingImageController';

const router = Router();

router.get('/', getHeader)
router.put('/edit', editHeader)

export default router;