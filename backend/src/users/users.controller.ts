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
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/dto/pagination.dto';
import { IdDto } from 'src/dto/id.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

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
  async update(@Param() params: IdDto, @Body() data: UpdateUserDto) {
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

  // Add profile picture
  @Post('/:id/profile_picture')
  @UseInterceptors(FileInterceptor('picture'))
  async addProfilePicture(
    @Param() params: IdDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // max size file is 5MB
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: /image\/(png|jpeg|jpg)/ }),
        ],
      }),
    )
    picture: Express.Multer.File,
  ) {
    console.log('params', params.id);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    console.log('picture', picture.buffer.toString('base64'));

    // find user by id
    const user = await this.usersService.findUserById(params.id);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // update image to user
    await this.usersService.addProfilePicture(
      params.id,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      picture.buffer.toString('base64'),
    );

    return {
      status: HttpStatus.OK,
      message: 'Profile picture added successfully.',
    };
  }

  // Get profile image
  @Get('/:id/profile_picture')
  async getProfilePicture(@Param() params: IdDto, @Res() res: Response) {
    const user = await this.usersService.findUserById(params.id);

    if (!user || !user.picture) {
      throw new BadRequestException('user not found');
    }

    // convert base64 to buffer and return image
    const buffer = Buffer.from(user.picture as string, 'base64');
    res.setHeader('Content-Type', 'image/png');
    res.send(buffer);
  }
}
