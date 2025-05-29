// src/controllers/itemsController.ts

import { Request, Response } from 'express';
import { Item } from '../models/item';

let items: Item[] = [];
let currentId = 1;

export const getAllItems = (req: Request, res: Response) => {
  res.json(items);
};

export const getItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: `Item not found with ID:${id}` });
  res.json(item);
};

export const createItem = (req: Request, res: Response) => {
  const { name } = req.body;
  const newItem: Item = { id: currentId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const updateItem = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: `Cannot Update: item with ID:${id} does not exis` });
  item.name = req.body.name;
  res.json(item);
};

export const deleteItem = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: `Cannot delete: item with ID:${id} does not exis` });
  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
};
