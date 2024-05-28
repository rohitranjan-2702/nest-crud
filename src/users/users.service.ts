import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'John Doe', role: 'ADMIN', email: 'test1@gmail.com' },
    { id: '2', name: 'Jane Doe', role: 'ENGINEER', email: 'test2@gmail.com' },
    { id: '3', name: 'Alice', role: 'INTERN', email: 'test3@gmail.com' },
  ];

  getUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const usersWithRole = this.users.filter((user) => user.role === role);
      if (usersWithRole.length === 0) {
        throw new NotFoundException('User Role Not Found');
      }
      return usersWithRole;
    }
    return this.users;
  }

  getUser(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const userByHighestId = this.users.sort(
      (a, b) => parseInt(b.id) - parseInt(a.id),
    )[0];
    const newId = (parseInt(userByHighestId.id) + 1).toString();
    const newUser = { id: newId, ...createUserDto };
    this.users.push(newUser);
    return createUserDto;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    const deletedUser = this.users[userIndex];
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
