import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsStrongPassword, IsUUID, MinLength } from "class-validator";
import { Role } from "../interfaces/user.interface";

export class CreateUserDto {

  @ApiProperty({ description: 'The ID of the user' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'The userName of the user' })
  @IsString()
  @MinLength(3)
  userName: string;

  @ApiProperty({ description: 'The password of the user' })
  @IsString()
  @IsStrongPassword()
  password: string;

  @ApiProperty({ description: 'The role of the user' })
  @IsString()
  @MinLength(3)
  roles: Role[];

}

