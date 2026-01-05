import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  signIn(username: string, pass: string): any {
    const user = this.usersService.find(username, pass);
    if (!user.ok) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
      username: username,
    };
  }

}
