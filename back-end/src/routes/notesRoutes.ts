import { Router } from 'express';
import { createNote, getNotes } from '../conrollers/headingNotesController';
const router = Router();

router.get("/", getNotes)
router.post("/", createNote)

export default router;