import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      username: user.username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, passport: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(passport, user.password);
      if (isPasswordValid) {
        return { ...user, password: undefined };
      }
    }
    throw new Error('Invalid credentials');
  }
}
