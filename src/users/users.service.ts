import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto) {
    const { username, password } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.usersRepository.create({
      username,
      password: hashedPassword,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }

  async getAllUsers() {
    const users = await this.usersRepository.find({
      relations: ['tasks'], // Загружаем связанные задачи
    });
    return users;
  }
}
