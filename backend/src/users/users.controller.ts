import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Get,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { PaginationDto } from 'src/dto/pagination.dto';
import { IdDto } from 'src/dto/id.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // List users
  @Get()
  async list(@Query() paginationDTO: PaginationDto) {
    try {
      const listUsers = await this.usersService.listUser(paginationDTO);

      return {
        status: HttpStatus.OK,
        message: 'List user successfully.',
        data: listUsers,
      };
    } catch (error) {
      throw new HttpException(
        'The record could not be listed.',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  // Find user by id
  @Get('/:id')
  async getUserById(@Param() params: IdDto) {
    const user = await this.usersService.findUserById(params.id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.CONFLICT);
    }
    try {
      return {
        status: HttpStatus.OK,
        message: 'User found.',
        data: user,
      };
    } catch (error) {
      throw new HttpException(
        'The record could not be found.',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  // Update user
  @Put('/:id')
  async update(@Param() params: IdDto, @Body() data: CreateUserDto) {
    // find user by id
    const user = await this.usersService.findUserById(params.id);
    if (!user) {
      throw new HttpException('User not exist', HttpStatus.CONFLICT);
    }

    // check if email is taken
    const isEmailTaken = await this.usersService.findUserByEmail(data.email);
    if (isEmailTaken && isEmailTaken.id !== params.id) {
      throw new HttpException('Email already in use', HttpStatus.CONFLICT);
    }

    try {
      await this.usersService.update(params.id, data);

      return {
        status: HttpStatus.OK,
        message: 'User updated successfully.',
      };
    } catch (error) {
      throw new HttpException(
        'The record could not be updated.',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  // Delete user
  @Delete('/:id')
  async delete(@Param() params: IdDto) {
    // find user by id
    const user = await this.usersService.findUserById(params.id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.CONFLICT);
    }

    try {
      await this.usersService.delete(params.id);

      return {
        status: HttpStatus.OK,
        message: 'User deleted successfully.',
      };
    } catch (error) {
      throw new HttpException(
        'The record could not be deleted.',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
}
