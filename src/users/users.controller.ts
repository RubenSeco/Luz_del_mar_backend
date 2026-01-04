import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from './interfaces/user.interface';
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Post()
  @Roles(Role.Admin)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.find(createUserDto.userName, createUserDto.password);
  }
}
