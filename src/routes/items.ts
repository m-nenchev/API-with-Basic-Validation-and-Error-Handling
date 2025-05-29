// src/routes/items.ts

import express from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/itemsController';
import { validateItem } from '../middleware/validateItem';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItemById);
router.post('/', validateItem, createItem);
router.put('/:id', validateItem, updateItem);
router.delete('/:id', deleteItem);

export default router;
