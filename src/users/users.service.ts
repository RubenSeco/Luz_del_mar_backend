import { Injectable } from '@nestjs/common';
import path from 'path';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

const DATA_FILE = path.join(__dirname, '../../users.json');


@Injectable()
export class UsersService {

  constructor(
    private readonly fileStorage: FileStorageService,
  ) { }

  create(user: User) {

    const users: User[] = this.fileStorage.read<User>(DATA_FILE) || [];

    if (users.find((u) => u.userName === user.userName)) {
      return {
        ok: false,
        message: 'User already exists',
      };
    }

    const saltOrRound = 10;
    const hash = bcrypt.hashSync(user.password, saltOrRound);

    const newUser = {
      ...user,
      id: randomUUID(),
      password: hash,
    };
    users.push(newUser);
    this.fileStorage.write(DATA_FILE, users);

  }

  find(userName: string, password: string): any {
    // Read existing users, add the new user, and write the updated array
    const users: User[] = this.fileStorage.read<User>(DATA_FILE) || [];
    const user = users.find((u) => u.userName === userName);

    if (!user) {
      return {
        ok: false,
        message: 'No existe el Usuario',
      };
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return {
        ok: false,
        message: 'Credenciales incorrectas',
      };

    }

    const { password: _, ...result } = user;

    return result;

  }

  delete(id: string): any {
    // Read existing users, add the new user, and write the updated array
    const users: User[] = this.fileStorage.read<User>(DATA_FILE) || [];
    const index = users.findIndex((u) => u.id === id);
    users.splice(index, 1);
    this.fileStorage.write(DATA_FILE, users);

  }


}