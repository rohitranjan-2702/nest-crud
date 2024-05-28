import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} //injecting modules

  // GET /users or GET /users?role=value
  @Get() // <--- This is a decorator
  getUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.getUsers(role);
  }

  // GET /users/interns (new route)
  @Get('interns')
  getInterns() {
    return this.usersService.getUsers('INTERN');
  }

  // GET /users/:id -> make this at last as the structure follows waterfall pattern
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  // POST /users
  @Post()
  createUser(
    @Body(ValidationPipe) // validates against our dto -> data transfer object
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserDto);
  }

  // PATCH /users/:id
  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) // validates against our dto
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
