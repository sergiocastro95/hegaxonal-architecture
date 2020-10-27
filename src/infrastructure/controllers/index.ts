import express from 'express';
import getUserByIdController from './getUserById.controller';

const router = express.Router();
router.get('/:id', getUserByIdController);
export default router;
