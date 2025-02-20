import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/dto/pagination.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  // Find a user by email
  async findUserByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  // Find a user by id
  async findUserById(id: string) {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }

  // list all users
  async listUser(paginationDTO: PaginationDto) {
    const [users, count] = await this.prismaService.$transaction([
      this.prismaService.user.findMany({
        skip: (paginationDTO.offset - 1) * paginationDTO.limit,
        take: paginationDTO.limit,
        orderBy: [
          {
            created_at: paginationDTO.sort_direction,
          },
        ],
      }),
      this.prismaService.user.count({}),
    ]);

    return {
      users,
      pagination: {
        itemCount: count,
        page: paginationDTO.offset,
        pageSize: paginationDTO.limit,
        pageCount: Math.ceil(count / paginationDTO.limit),
      },
    };
  }

  // Update user
  async update(id: string, data: CreateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  // Delete user
  async delete(id: string) {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
