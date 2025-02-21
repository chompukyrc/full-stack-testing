/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  // Register new user
  @Post('register')
  async create(@Body() data: RegisterDto) {
    const isUserExist = await this.usersService.findUserByEmail(data.email);
    if (isUserExist) {
      throw new HttpException('Email already in use', HttpStatus.CONFLICT);
    }

    try {
      console.log('data', data);
      const createdUser = await this.authService.create(data);
      const { password, ...userWithoutPassword } = createdUser;
      return {
        status: HttpStatus.OK,
        message: 'Created user successfully.',
        data: userWithoutPassword,
      };
    } catch (error) {
      console.log('error', error);
      throw new HttpException(
        'The record could not be created.',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  // Login user
  @Post('login')
  async login(@Body() data: LoginDto) {
    const user = await this.authService.login(data);
    if (!user) {
      throw new HttpException(
        'Invalid email or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return {
      status: HttpStatus.OK,
      message: 'Login successfully.',
      data: user,
    };
  }

  // Check email exist
  @Post('check-email')
  async checkEmail(@Body() data: { email: string }) {
    const user = await this.usersService.findUserByEmail(data.email);
    if (user) {
      throw new HttpException('Email already in use', HttpStatus.CONFLICT);
    }

    return {
      status: HttpStatus.OK,
      message: 'Email is available.',
    };
  }
}
