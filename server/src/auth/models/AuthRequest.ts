import { User } from '@prisma/client';
import { Request } from 'express';

export interface AuthResquest extends Request {
  user: User;
}
