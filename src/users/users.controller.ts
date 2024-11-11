import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/craete-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.usersService.create(user);
  }
}
