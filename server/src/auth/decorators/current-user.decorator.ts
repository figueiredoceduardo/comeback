import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthResquest } from '../models/AuthRequest';
import { User } from '@prisma/client';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthResquest>();

    return request.user;
  },
);
