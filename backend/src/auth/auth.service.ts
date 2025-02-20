import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Register new user
  async create(data: CreateUserDto) {
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    return await this.prismaService.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  // Login user
  async login(data: LoginDto) {
    const user = await this.usersService.findUserByEmail(data.email);

    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      return null;
    }

    const payload = { email: user.email, sub: user.id };

    return {
      // generate JWT token
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
