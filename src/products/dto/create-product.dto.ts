/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, MinLength } from 'class-validator';


export class CreateProductDto {

  @ApiProperty({ description: 'The ID of the product' })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'The description of the product' })
  @IsString()
  @MinLength(1)
  description: string;

  @ApiProperty({ description: 'The image URL of the product' })
  @IsString()
  image: string;

  @ApiProperty({ description: 'The category of the product' })
  @IsString()
  category: string;

  @ApiProperty({ description: 'The slug of the product' })
  @IsString()
  slug: string;

  @ApiProperty({ description: 'The title of the product' })
  @IsString()
  @MinLength(1)
  title: string;

}
