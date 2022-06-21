import express from "express";
import { v4 as uuidv4 } from 'uuid';
import {getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/user.js';

const router = express.Router();

// all routes in here are starting with /users
router.get('/',getUsers);
router.post('/',createUser);
router.get('/:id',getUser);
router.delete('/:id', deleteUser);
router.patch('/:id',updateUser);

export default router;