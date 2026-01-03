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
    if (!user) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }



}
