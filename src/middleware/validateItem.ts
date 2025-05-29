// src/middleware/validateItem.ts

import { Request, Response, NextFunction } from 'express';

export function validateItem(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ message: 'Name is required and must be a string' });
  }
  next();
}